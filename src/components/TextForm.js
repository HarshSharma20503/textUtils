import React, { useState } from 'react'


export default function TextForm(props) {
    const [ text, setText ]=useState("Enter Text here");

    const handleUpClick = () =>{
        console.log("upper");
        setText("You  have clicked on upper case");
    }
    const handleOnChange = (event) =>{
        console.log("uonChange");
        setText(event.target.value);
        
    }

    return (
    <div>
        <h1>{props.heading} - </h1>
        <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to upper case</button>
        </div>
        
    </div>
  )
}
