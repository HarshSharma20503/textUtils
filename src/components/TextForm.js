import React, { useState } from 'react'

export default function TextForm(props) {
    const [ text, setText ]=useState("Enter Text here");

    const handleUpClick = () =>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleloClick = () =>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleclClick = () =>{
        setText("");
        props.showAlert("Cleared text","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text","success");
    }

    const handleExtraSpaces = ()=> {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Deleted Extra space","success");
    }

    return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} - </h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleloClick}>Convert to Lower Case</button>             
                <button className="btn btn-primary my-3 mx-2" onClick={handleclClick}>Clear text</button>            
                <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy text</button>            
                <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>            
            </div>  
         </div>
         <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008*text.split(' ').length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Your text to preview here"}</p>
         </div>
    </>
  )
}
