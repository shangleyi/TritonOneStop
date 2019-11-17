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

class QuarterSummary extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Paper className={useStyles.root}>
                <Table className={useStyles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Avg. Hours</TableCell>
                            <TableCell align="right">Avg. Grade&nbsp;(g)</TableCell>
                            <TableCell align="right">Avg. GPA&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow>
                                <TableCell align="right">{this.props.hours}</TableCell>
                                <TableCell align="right">{this.props.grade}</TableCell>
                                <TableCell align="right">{this.props.gpa}</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default QuarterSummary;