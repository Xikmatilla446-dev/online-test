import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const CheckboxComponent = ({handleChange, value, quatsion, items}) => {


    debugger
    const {name} = items[0];

    return(

        <FormControl component="fieldset">
            <FormLabel component="legend">{quatsion}</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                {items.map(item => (
                    <FormControlLabel
                        key={item.id}
                        value={item.name} control={<Radio />} label={item.label} />
                ))}

            </RadioGroup>
        </FormControl>

    );

}

export default CheckboxComponent;
