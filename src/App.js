//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import React , { useState } from 'react';
//imrs
import Alert from './Components/Alert';

// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";

//let name = <b>Pooja</b>;
//let name = "Pooja";

function App() {
 const [mode , setmode] = useState('light'); //whether dark mode is enable or not

 const [alert , setAlert] = useState(null);

 const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
 }

 const togglemode = () => {
    if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled" , "success");
        document.title = 'TextUtils - Dark Mode';
        // setInterval(() =>{
        //   document.title = 'TextUtils is Amazing';
        // },2000)
        // setInterval(() =>{
        //   document.title = 'Install TextUtils Now';
        // },1500)
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled" , "success");
      document.title = 'TextUtils - Light Mode';
    }
 }

  return (
  <>

 {/* <Navbar title = "textutils2" aboutText = "About Text"/> */}

 {/* for default props (Humne props ko pass hi nhi kiya toh voh default value lega )*/}
 {/* <Navbar/> */}

{/* title toh yehi lega lekin aboutText default se le lega */}

    {/* <BrowserRouter> */}
        <Navbar title="TextUtils" aboutText="TextAbouts" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter Text to analyze "mode={mode} showAlert={showAlert}/>}></Route> */}

            <TextForm heading="Enter Text to analyze "mode={mode} showAlert={showAlert}/>

          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
  </>

  );
}

export default App;
