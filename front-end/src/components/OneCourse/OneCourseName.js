import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        display: 'flex',
        minWidth: 200
    }
}));

class OneCourseName extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courseArray : [],
            deptArray: [],
            classArray:[]
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.matchCourse = this.matchCourse.bind(this);
        this.popCourse = this.popCourse.bind(this);
        this.getUnique = this.getUnique.bind(this);
    }

    async fillInCourse(){
        const response =
            await axios.get("http://localhost:8080/getCourse")
        let courseArray = [];
        let deptArray = [];
        let currentComponent = this;
        response.data.forEach(function(doc) {
            courseArray.push({
                id: doc.id,
                course: doc.course,
                dep: doc.dep,
                gpa_actual: doc.gpa_actual,
                letter_grade:doc.letter_grade,
                number: doc.number,
                time: doc.time
            });
            deptArray.push({
                id: doc.id,
                dep: doc.dep
            })
        });
        currentComponent.setState({courseArray: courseArray});
        currentComponent.setState({deptArray: this.getUnique(deptArray, 'dep')});
    }

    getUnique(arr, comp){
        const unique = arr.map(e=>e[comp])
            .map((e,i,final) => final.indexOf(e) == i && i)
            .filter(e=>arr[e]).map(e=>arr[e]);
        return unique.sort((a,b)=> (a.id>b.id ? 1 : -1));
    }

    componentDidMount() {
        this.fillInCourse();
    }

    matchCourse(e){
        let classArray = [];
        let courseArray = this.state.courseArray;
        let deptArray = this.state.deptArray;
        let department = "";

        deptArray.map((item) => {
            if (item.id == e.target.value){
                department = item.dep;
            }
        })

        courseArray.map((item) => {
            if (item.dep == department) {
                classArray.push({number: item.number, id: item.id})
            }
        })

        if (e.target.value == "") {
            this.props.popToCourse(0,"",0);
        }
        this.setState({classArray:classArray});
    }

    popCourse(e){
        let courseArray = this.state.courseArray;
        let classGPA = 0;
        let classGrade ="";
        let classTime = 0;
        courseArray.map((item) => {
            if (item.id == e.target.value) {
                classGPA = item.gpa_actual;
                classGrade = item.letter_grade;
                classTime = item.time;
            }
        });
        if (e.target.value == "") {
            classGPA = 0;
            classGrade = "";
            classTime = 0;
        }
        this.props.popToCourse(classGPA,classGrade,classTime);
    }

    render() {
        return (
            <div>
                <FormControl classes={useStyles.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Department</InputLabel>
                    <Select native defaultValue="" input={<Input id="grouped-native-select"/>} onChange={this.matchCourse}>
                        <option value="    "/>
                        {this.state.deptArray.map((item) => (
                                <option value={item.id}> {item.dep} </option>
                            )
                        )}
                    </Select>
                </FormControl>
                <FormControl classes={useStyles.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Course</InputLabel>
                    <Select native defaultValue="" input={<Input id="grouped-native-select"/>} onChange={this.popCourse}>
                        <option value="    "/>
                        {this.state.classArray.map((item) => (
                                <option value={item.id}> {item.number} </option>
                            )
                        )}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default OneCourseName;