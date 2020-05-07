import * as React from "react";

import './time-styles.css';


function CountdownTimer() {
    const [counter, setCounter] = React.useState(60);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className="App">

            <div className="countdown">
                <p id="timer"> </p>
                <span className="ball-fill">{counter}</span>
            </div>

        </div>
    );
}

export default CountdownTimer
