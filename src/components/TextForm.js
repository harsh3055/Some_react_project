import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, settext]= useState("")

    const converupcase = ()=>{
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert("converted to uppercase", "success");
    }

    const convertlowcase =()=>{
        let smallText = text.toLowerCase();
        settext(smallText)
    }
    
    const handletoclear =()=>{
        settext("");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleCapitalizeWordClick = () => {
        let lowercase = text.toLowerCase();
        let words = lowercase.split(" ");
        let newWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let newText = newWords.join(" ");
        settext(newText);
      };
    const handleonChange = (event)=>{
        settext(event.target.value)
    }
    

  return (
    <>
    <div>
        <h1 style={{color: props.mode==="light"?"black":"white"}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="text" onChange={handleonChange} style = {{backgroundColor: props.mode==="light"?"white":"grey", color: props.mode==="light"?"black":"white"}}value = {text} rows="8"></textarea>
            </div>
        <button className="btn btn-primary" onClick={converupcase}>Convert To Uppercase</button>
        <button className="btn btn-secondary mx-3" onClick={convertlowcase}>Conver to lowercase</button>
        <button className="btn btn-danger" onClick={handletoclear}>Clear text</button>
        <button className="btn btn-success mx-3" onClick={speak}>listen</button>
        <button className="btn btn-info" onClick={handleCapitalizeWordClick}>make first letter capital</button>
  </div>

  <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
        <h1 style={{color: props.mode==="light"?"black":"white"}}>Your word summary is:</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} time taken to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "write something in the text-box"}</p>
  </div>
  </>
  )
}