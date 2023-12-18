//rfc -> function based component of react

//we import useState hook from hook
//hooks bina class ko use kiye class k features ko use karte hai

import React, {useState} from 'react'


export default function TextForm(props) {
   
    const handleUpClick = () => {
       // console.log("Upper case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!" , "success");
    }

    const handleLowClick = () => {
      // console.log("Lower case was clicked " + text);
       let newText = text.toLowerCase();
       setText(newText);
      props.showAlert("Converted to Uppercase!" , "success");
   }

    const handleClearClick = () => {
    // console.log("Lower case was clicked " + text);
     let newText = '';
     setText(newText);
     props.showAlert("Text Cleared" , "success");
 }

 const handleReverse = () => {
  //convert string to array
  let strarr = text.split("");
  //reverse the array
  let rev = strarr.reverse();
  //array to string
  let newtext = rev.join("");
   setText(newtext);
};

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

const Speak = () => {
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
  const toogle = document.getElementById('toggle')
  if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop"
  }
  else {
      toogle.innerHTML = "Speak"
      if (toogle.innerHTML === "Speak"){
          window.speechSynthesis.cancel()
      }
  }
}

const cancelSpeech=()=>{
  speechSynthesis.cancel()
}

const handleCopy = () =>{

  var text = document.getElementById("myBox");
  text.select();
 navigator.clipboard.writeText(text.value);

 //we can directly do this also
// navigator.clipboard.writeText(text);

 props.showAlert("Copied to Clipboard" , "success");
}

const handleExtraSpaces = () => {

    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Removed" , "success");
}

    const handleOnChange = (event) => {
      //  console.log("On Changed ");
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    //text = "new text"; //wrong way to change the state
    //setText("new text"); //correct way to change the state

  return (
    <>
    <div className="container" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>{props.heading}</h3>
  <div className="mb-3">
    <textarea className="formcontrol" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" cols = "100" rows="8"></textarea>
  </div>
  <button className="btn btn-info mx-1" onClick = {handleUpClick} >Convert to Uppercase</button>
  <button className="btn btn-warning mx-1" onClick = {handleLowClick} >Convert to Lowercase</button>
  <button className="btn btn-success mx-1" onClick = {handleClearClick} >Clear Text</button>
  <button className="btn btn-secondary mx-1" onClick = {handleReverse} >Reverse Text</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">speak</button>
  <button type="submit" onClick={Speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
  <button type="submit" className="btn btn-danger mx-2" onClick={cancelSpeech}>Stop TTS</button>
  <button className="btn btn-secondary mx-1" onClick = {handleCopy} >Copy Text</button>
  <button className="btn btn-secondary mx-1" onClick = {handleExtraSpaces} >Remove Extra spaces</button>

    </div>
    <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h3>Your Text Summary</h3>

      {/* <p>{text.split(" ").length - 1} words and {text.length} characters</p> */}

      {/* Technique 1 */}
      {/* <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p> */}

      {/* Technique 2 */}
     <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words</p>

      <p>{text.trim().length } characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter something to Preview it here"}</p>
    </div>
    </>
  )
}

//my-3 is for margin
//mx-2 bootstrap ki class hai jo x mai margin degi 