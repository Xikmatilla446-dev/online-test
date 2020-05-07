import React from 'react'
import CheckboxComponent from '../checkbox/Checkbox'

const FormComponent =()=>{

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


        return (
            <div style={{ fontFamily: 'system-ui', float: "left" }}>
                <label>
                    <CheckboxComponent
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <span style={{ marginLeft: 8 }}>Label Text</span>
                </label>
            </div>
        )
    }


export default FormComponent;
