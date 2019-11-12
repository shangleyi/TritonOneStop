import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import TOSNavBarBar from "../components/NavBar/TOSNavBar";
import OneCourse from "../components/OneCourse/OneCourse";
import QuarterSummary from "../components/OneCourse/QuarterSummary";
import Heading from "../components/OneCourse/Heading";
import '../App.css';

class CoursePlanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            hours:0,
            gpa:0,
            credits:0,
            totalGPA:0
        };
        this.majorHandler=this.majorHandler.bind(this);
        this.majorHandlerCredit=this.majorHandlerCredit.bind(this);
    }

    majorHandler(time,gpa_actual){
        this.setState({
            hours:time+this.state.hours,
            gpa:gpa_actual
        });
    }

    majorHandlerCredit(credit){
        this.setState({
            credits: parseInt(credit) + this.state.credits,
            totalGPA:this.state.gpa*parseInt(credit)+this.state.totalGPA,
        })
    }

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
        return (
            <div className="App">
                <TOSNavBarBar/>
                <Heading/>
                <OneCourse majorHandler={this.majorHandler} majorHandlerCredit={this.majorHandlerCredit}/>
                <OneCourse majorHandler={this.majorHandler} majorHandlerCredit={this.majorHandlerCredit}/>
                <OneCourse majorHandler={this.majorHandler} majorHandlerCredit={this.majorHandlerCredit}/>
                <QuarterSummary hours={this.state.hours.toFixed(2)}
                                gpa={(this.state.totalGPA/this.state.credits).toFixed(2)}
                                grade={this.setGrade((this.state.totalGPA/this.state.credits).toFixed(1))}/>
            </div>
        )
    }
}

export default CoursePlanner;