import React, {useEffect, useState,   useRef } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

import { green } from '@material-ui/core/colors';
const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


const CheckboxComponent = ({handleChange, value, quatsion, items, disabled}) => {



    return(

        <FormControl component="fieldset">
            <FormLabel component="legend"><h1>{quatsion}</h1></FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                {items.map((item, i) => (
                    <FormControlLabel
                        defaultValue={value}
                        key={item.id}
                        value={item.name}
                        disabled={disabled}
                        control={<GreenRadio

                        />}
                        label={item.label} />
                ))}


            </RadioGroup>
        </FormControl>

    );

}

export default CheckboxComponent;
