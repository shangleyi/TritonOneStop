import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: 120,
        display:'flex',
        textAlign: 'left'
    },
}));

class Credits extends Component {
    constructor(props) {
        super(props);
        this.matchCredit=this.matchCredit.bind(this);
    }

    matchCredit(e){
        this.props.handlerCredit(Number.parseInt(e.target.value));
    }

    render() {
        return (
            <div>
                <FormControl classes={useStyles.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Units</InputLabel>
                    <Select native defaultValue="" input={<Input id="grouped-native-select"/>} onChange={this.matchCredit}>
                        <option value={0}></option>
                        <option value={1}>1 unit</option>
                        <option value={2}>2 units</option>
                        <option value={3}>3 units</option>
                        <option value={4}>4 units</option>
                        <option value={5}>5 units</option>
                        <option value={6}>6 units</option>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default Credits;
