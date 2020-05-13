import React, {useEffect} from 'react';
import {Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom'

import dogsData from './data'
import CheckboxComponent from "../checkbox/Checkbox";

import { CardButtonStyles } from "./card-button-styles";
import Posts from "../Posts/Posts";
import CountdownTimer from "../count-down-timer/CountdownTimer";

const FormComponent = (props) => {
    const [value, setValue] = React.useState(null);
    const [result, setResult] = React.useState([]);
    const [correct, setCorrect] = React.useState([]);
    const [disabled , setDisabled ] = React.useState(null);
    const [id, setId] = React.useState(1);
    const [show, setShow] = React.useState(true);
    const answers = ['A', 'B', 'B', 'A', 'C', 'C', 'D', 'B', 'A', 'G' ];


    useEffect(()=> {

        setTimeout(()=>{
            setShow(false);


        }, 60000)
    }, [])


    const handleChange = (event) => {

        if (event.target.value === "A" || event.target.value === "B"
            || event.target.value === "C" || event.target.value === "D" || event.target.value === "G"   ) {
            setValue(event.target.value);

        } else {
            setValue("");
        }



        if (event.target.checked) {
            setDisabled(true);
        }


        };




    const addToResult=()=> {

        if (value !==null){

            let array = result;
            array.push(value);
            setResult(array);
            console.log(result)
            setId(id + 1);
            setDisabled(false);
            setValue('');
        }

        if (dogsData.length === id){
            setShow(false);

            let arrayItem = [];
            for (let i = 0; i <answers.length ; i++) {
                for (let j = 0; j < result.length; j++) {

                    if (i=== j){
                        if (answers[i] === result[j]){
                            arrayItem.push(`${i + 1} - ${result[i]}`)
                          }
                    }
                }

             }

            setCorrect(arrayItem);
            console.log(arrayItem)

        }


    };



    return (
        <div>
            { show ? <h1>Savolar {dogsData.length} ta sizga 1 daqiqa berildi</h1> : null}
                {show ? dogsData.filter(item => item.id ===id).map((itemSecion, index)=> (
                    <CheckboxComponent
                        value={value}
                        key={index}
                        quatsion={itemSecion.quatsion}
                        items={itemSecion.item}
                        handleChange={handleChange}
                        disabled={disabled}



                    />
                )): null}



            {show ? (<CardButtonStyles  onClick={addToResult}>Next</CardButtonStyles>): null}

            {
                !show ? (
                    <div className="show-result">
                        <div    className="flex-container">
                            <h1>Sizing javoblaringiz</h1>
                            <br/>
                            {result.map((res, i)=> (
                                <Posts key={i} index={i} item={res}/>))}
                        </div>

                        <div className="flex-container">
                            <h1>Tog'ri javoblar</h1>
                            <br/>
                            {answers.map((res, i)=> (
                                <Posts key={i} index={i}
                                       item={res}
                                       check={true}

                                 />))}
                        </div>

                        <div className="flex-container">
                            <h1>Sizning to'gri javoblaringiz</h1>
                            <br/>
                            {correct.map((res, i)=> (
                                <ul key={i}
                                    className='blog'>
                                    <li>{res}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                ) : null



            }
            { show ?  <CountdownTimer/> : null}

        </div>
    );
}

export default (withRouter(FormComponent));
