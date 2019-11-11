import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import db from '../../base';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
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
    }

    componentDidMount() {
        let courseArray = [];
        let deptArray = [];
        let currentComponent = this;
        db.collection("courses").get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                courseArray.push({
                    id: doc.data().id,
                    course: doc.data().course,
                    dep: doc.data().dep,
                    gpa_actual: doc.data().gpa_actual,
                    letter_grade:doc.data().letter_grade,
                    number: doc.data().number,
                    time: doc.data().time
                });
                deptArray.push({
                    id: doc.data().id,
                    dep: doc.data().dep
                })
            });
            currentComponent.setState({courseArray: courseArray});
            function getUnique(arr, comp){
                const unique = arr.map(e=>e[comp])
                    .map((e,i,final) => final.indexOf(e) == i && i)
                    .filter(e=>arr[e]).map(e=>arr[e]);
                return unique.sort((a,b)=> (a.id>b.id ? 1 : -1));
            }
            currentComponent.setState({deptArray: getUnique(deptArray, 'dep')});
        })
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
                classArray.push({number: item.number})
            }
        })
        this.setState({classArray:classArray});
    }

    render() {
        return (
                <div>
                <FormControl className={useStyles.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Department</InputLabel>
                    <Select native defaultValue="" input={<Input id="grouped-native-select"/>} onChange={this.matchCourse}>
                        <option value=""/>
                        {this.state.deptArray.map((item) => (
                            <option value={item.id}> {item.dep} </option>
                            )
                        )}
                    </Select>
                </FormControl>
                <FormControl className={useStyles.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Course</InputLabel>
                    <Select native defaultValue="" input={<Input id="grouped-native-select"/>}>
                        <option value=""/>
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