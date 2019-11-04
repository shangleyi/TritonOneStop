import React from 'react';
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

const rows = [
    createData(<OneCourseName/>, <Credits/>, 6.0, "A", 4.0),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Course</TableCell>
                        <TableCell align="right">No. of Credits</TableCell>
                        <TableCell align="right">Avg. Hours</TableCell>
                        <TableCell align="right">Avg. Grade&nbsp;(g)</TableCell>
                        <TableCell align="right">Avg. GPA&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </Paper>
    );
}