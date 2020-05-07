import React from 'react';


import FormComponent from "./components/form/FormComponent";


import './App.css';
import Navbar from "./components/navbar/navbar-component";




function App() {
  return (
    <div className="App">
        <Navbar/>

      <FormComponent/>
    </div>
  );
}

export default App;
