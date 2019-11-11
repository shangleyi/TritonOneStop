import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

class Credits extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FormControl className={useStyles.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Units</InputLabel>
                    <Select native defaultValue="" input={<Input id="grouped-native-select"/>}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default Credits;
