import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBarBar from "../components/NavBar/TOSNavBar";
import QuarterSummary from "../components/OneCourse/QuarterSummary";
import '../App.css';
import {makeStyles} from "@material-ui/core";
import OneCourseName from "../components/OneCourse/OneCourseName";
import Credits from "../components/OneCourse/Credits";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    sticky: {
        textAlign: 'left',
        width: '20%'
    }
});

function createData(name, credits, hours, grade, gpa) {
    return {name, credits, hours, grade, gpa};
}

class CoursePlanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            credit1:0,
            hour1:0,
            grade1:"",
            gpa1:"",
            credit2:0,
            hour2:0,
            grade2:"",
            gpa2:"",
            credit3:0,
            hour3:0,
            grade3:"",
            gpa3:"",
            credit4:0,
            hour4:0,
            grade4:"",
            gpa4:"",
            credit5:0,
            hour5:0,
            grade5:"",
            gpa5:"",
            credit6:0,
            hour6:0,
            grade6:"",
            gpa6:""
        };
        this.popCourse1 = this.popCourse1.bind(this);
        this.popCredit1 =this.popCredit1.bind(this);
        this.popCourse2 = this.popCourse2.bind(this);
        this.popCredit2 =this.popCredit2.bind(this);
        this.popCourse3 = this.popCourse3.bind(this);
        this.popCredit3 =this.popCredit3.bind(this);
        this.popCourse4 = this.popCourse4.bind(this);
        this.popCredit4 =this.popCredit4.bind(this);
        this.popCourse5 = this.popCourse5.bind(this);
        this.popCredit5 =this.popCredit5.bind(this);
        this.popCourse6 = this.popCourse6.bind(this);
        this.popCredit6 =this.popCredit6.bind(this);
        this.setGrade = this.setGrade.bind(this);
        this.isLogIn = this.isLogIn.bind(this);
    }

    // empty isLogIn method
    isLogIn(uid, email) {

    }

    /* Find the matching gpa, letter grade and time of the first course*/
    popCourse1(classGPA, classGrade, classTime){
        this.setState({gpa1:classGPA});
        this.setState({grade1:classGrade});
        this.setState({hour1:classTime});
    }

    /* Store the credit of the first course*/
    popCredit1(credit){
        this.setState({credit1:credit})
    }

    popCourse2(classGPA, classGrade, classTime){
        this.setState({gpa2:classGPA});
        this.setState({grade2:classGrade});
        this.setState({hour2:classTime});
    }

    popCredit2(credit){
        this.setState({credit2:credit})
    }

    popCourse3(classGPA, classGrade, classTime){
        this.setState({gpa3:classGPA});
        this.setState({grade3:classGrade});
        this.setState({hour3:classTime});
    }

    popCredit3(credit){
        this.setState({credit3:credit})
    }

    popCourse4(classGPA, classGrade, classTime){
        this.setState({gpa4:classGPA});
        this.setState({grade4:classGrade});
        this.setState({hour4:classTime});
    }

    popCredit4(credit){
        this.setState({credit4:credit})
    }

    popCourse5(classGPA, classGrade, classTime){
        this.setState({gpa5:classGPA});
        this.setState({grade5:classGrade});
        this.setState({hour5:classTime});
    }

    popCredit5(credit) {
        this.setState({credit5: credit})
    }

    popCourse6(classGPA, classGrade, classTime){
        this.setState({gpa6:classGPA});
        this.setState({grade6:classGrade});
        this.setState({hour6:classTime});
    }

    popCredit6(credit) {
        this.setState({credit6: credit})
    }

        /* Determines the grade which corresponds to the GPA*/
    setGrade(number){
        if (number > 4.0){
            return "A"
        }
        if (number > 3.7){
            return "A-"
        }
        if (number > 3.3){
            return "B+"
        }
        if (number > 3.0){
            return "B"
        }
        if (number > 2.7){
            return "B-"
        }
        if (number > 2.3){
            return "C+"
        }
        if (number > 2.0){
            return "C"
        }
        if (number > 1.7){
            return "C-"
        }
        if (number > 1.0){
            return "D"
        }
        return "F"
    }

    render() {
        const rows = [
            createData(
                <OneCourseName popToCourse={this.popCourse1}/>, <Credits handlerCredit={this.popCredit1}/>,
                this.state.hour1, this.state.grade1,this.state.gpa1),
            createData(
                <OneCourseName popToCourse={this.popCourse2}/>, <Credits handlerCredit={this.popCredit2}/>,
                this.state.hour2, this.state.grade2,this.state.gpa2),
            createData(
                <OneCourseName popToCourse={this.popCourse3}/>, <Credits handlerCredit={this.popCredit3}/>,
                this.state.hour3, this.state.grade3,this.state.gpa3),
            createData(
                <OneCourseName popToCourse={this.popCourse4}/>, <Credits handlerCredit={this.popCredit4}/>,
                this.state.hour4, this.state.grade4,this.state.gpa4),
            createData(
                <OneCourseName popToCourse={this.popCourse5}/>, <Credits handlerCredit={this.popCredit5}/>,
                this.state.hour5, this.state.grade5,this.state.gpa5),
            createData(
                <OneCourseName popToCourse={this.popCourse6}/>, <Credits handlerCredit={this.popCredit6}/>,
                this.state.hour6, this.state.grade6,this.state.gpa6),
        ]

        return (
            <div className="App">
                <TOSNavBarBar isLogIn={this.isLogIn}/>
                <Paper className={useStyles.root}>
                    <Table className={useStyles.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Course</TableCell>
                                <TableCell align="right">No. of Credits</TableCell>
                                <TableCell align="right">Avg. Hours</TableCell>
                                <TableCell align="right">Avg. Grade</TableCell>
                                <TableCell align="right">Avg. GPA</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.credits}</TableCell>
                                    <TableCell align="right">{row.hours}</TableCell>
                                    <TableCell align="right">{row.grade}</TableCell>
                                    <TableCell align="right">{row.gpa}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <QuarterSummary hours={(this.state.hour1+this.state.hour2+this.state.hour3+this.state.hour4
                    +this.state.hour5+this.state.hour6).toFixed(2)}
                                gpa={((this.state.gpa1*this.state.credit1+this.state.gpa2*this.state.credit2+
                                    this.state.gpa3*this.state.credit3+this.state.gpa4*this.state.credit4+
                                    this.state.gpa5*this.state.credit5+this.state.gpa6*this.state.gpa6)/
                                    (this.state.credit1+this.state.credit2+this.state.credit3+
                                this.state.credit4+this.state.credit5+this.state.credit6)).toFixed(2)}
                                grade={this.setGrade((this.state.gpa1*this.state.credit1+this.state.gpa2*this.state.credit2+
                                    this.state.gpa3*this.state.credit3+this.state.gpa4*this.state.credit4+
                                    this.state.gpa5*this.state.credit5+this.state.gpa6*this.state.gpa6)/
                                    (this.state.credit1+this.state.credit2+this.state.credit3+
                                        this.state.credit4+this.state.credit5+this.state.credit6))}/>
            </div>
        )
    }
}

export default CoursePlanner;