import React from 'react';

import dogsData from './data'
import CheckboxComponent from "../checkbox/Checkbox";

export default function FormComponent() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
                {dogsData.map((itemSecion, index)=> (
                            <CheckboxComponent
                                key={index}
                                handleChange={handleChange}
                                value={value}
                                quatsion={itemSecion.quatsion}
                                items={itemSecion.item} />
                ))}

        </div>
    );
}
