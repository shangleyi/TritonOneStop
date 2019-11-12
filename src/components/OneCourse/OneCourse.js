import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import OneCourseName from "./OneCourseName";
import Credits from "./Credits";

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

function createData(name, credits, hours, grade, gpa) {
    return { name, credits, hours, grade, gpa};
}

class OneCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hours:0,
            gpa:0,
            grade:"",
        };
        this.handler=this.handler.bind(this);
        this.popToPlanner=this.popToPlanner.bind(this);
        this.handlerCredit=this.handlerCredit.bind(this);
    }

    handler(time,gpa_actual,letter_grade){
        this.setState({
            hours:time,
            gpa:gpa_actual,
            grade:letter_grade
        });
    }

    popToPlanner(time,gpa_actual){
        this.props.majorHandler(time,gpa_actual);
    }

    handlerCredit(credit){
        this.props.majorHandlerCredit(credit);
    }

    render() {
        const rows = [createData(
            <OneCourseName handler={this.handler} popToPlanner={this.popToPlanner}/>, <Credits handlerCredit={this.handlerCredit}/>,
            this.state.hours, this.state.grade,this.state.gpa)]
        return (
            <Paper className={useStyles.root}>
                <Table className={useStyles.table} aria-label="simple table">
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
        );
    }
}

export default OneCourse;