/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
const [mode, setMode] = useState("light"); //whether dark mode is enables or not
const [alert, setAlert] = useState(null);

const showAlert = (message,type) =>{
  setAlert({
    msg:message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  },1500);
}
const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#192734';
    showAlert("Dark mode has been enabled","success");
    document.title='TextUtils - DarkMode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title='TextUtils - LightMode';
  }
}
  return (
    <>
    <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter Text to analyze below' mode={mode}/>} />
          <Route exact path="/about" element={<About />} />
    </Routes>
     </div>
    </Router>
    </>
  );
}

export default App;
