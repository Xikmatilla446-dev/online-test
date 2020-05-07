import React from 'react';


import FormComponent from "./components/form/FormComponent";


import './App.css';
import Navbar from "./components/navbar/navbar-component";
import CountdownTimer from "./components/count-down-timer/CountdownTimer";




function App() {
  return (
    <div className="App">
        <Navbar/>
        <main style={{marginTop: '100px'}}>
        <FormComponent/>
        <CountdownTimer/>
        </main>
    </div>
  );
}

export default App;
