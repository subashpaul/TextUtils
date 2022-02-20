import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import React from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const togglemode = () => {
    let btn = document.getElementById("togglemode");
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
    if (mode === "light") {
      setmode("dark");
      btn.innerText = "Go Light!☀️";
    } else {
      setmode("light");
      btn.innerText = "Go Dark!🌑";
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };
  const [text, setText] = useState("");
  const toUpper = () => {
    let upText = text.toUpperCase();
    setText(upText);
    showAlert("Cnverted to Uppercase!", "success");
  };
  const toLower = () => {
    let loText = text.toLowerCase();
    setText(loText);
    showAlert("Converted to LowerCase!", "success");
  };
  const textOnChange = (event) => {
    setText(event.target.value);
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text Copied!", "success");
  };
  const clearText = () => {
    setText("");
    showAlert("Text Cleared!", "success");
  };
  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} togglemode={togglemode} />
      <div style={{ height: "3rem" }}>
        <Alert alert={alert} />
      </div>
      <div className="container">
        {/* <Routes> */}
        {/* for react-router-dom v6 and above Switch is changed to Routes and also in Route component element is needed to be passed */}
        {/* <Route
              exact
              path="/"
              element={ */}
        {/* <div> */}
        <Home
          text={text}
          toUpper={toUpper}
          toLower={toLower}
          copyText={copyText}
          clearText={clearText}
          textOnChange={textOnChange}
          mode={mode}
        />
        <Preview text={text} mode={mode} />
        {/* </div> */}
        {/* } */}
        {/* /> */}

        {/* <Route exact path="/Aboutus" element={ */}
        {/* <Aboutus /> */}
        {/* } /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
