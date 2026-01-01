import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
  
  const [text, setText] = useState('');
  const handleUpclick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoclick=()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  function handleOnChange(event){
    setText(event.target.value);
  }
  const handleCtclick=()=>{
    setText("")
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const countVowels = () => {
    const vowels = text.match(/[aeiouAEIOU]/g);
    const count = vowels ? vowels.length : 0;
    alert(`Number of vowels: ${count}`);
  };
  const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    }
  return (
    <>
    <div className="container">
    <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>Enter your text</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#7a769342':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={countVowels}>Count Vowels</button>
    <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-danger mx-2" onClick={handleCtclick}>Clear All</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
    );
}