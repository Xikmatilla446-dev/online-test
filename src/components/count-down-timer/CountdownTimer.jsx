import * as React from "react";

import './time-styles.css';


function CountdownTimer() {
    const [counter, setCounter] = React.useState(60);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);


    return (
        <div className="timeManger">
            <br/>
            <div className="loader-block">
                <div className="loader-box">
                    <div className="looader-item"></div>
                    <div className="looader-item"></div>
                    <div className="looader-item"></div>
                    <div className="item">{counter}</div>
                </div>
            </div>

        </div>
    );
}

export default CountdownTimer
