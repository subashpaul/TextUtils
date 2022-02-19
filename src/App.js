import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    let btn = document.getElementById("togglemode");
    document.body.classList.toggle("bg-dark");
    for (const elem of document.getElementsByClassName("para")) {
      elem.classList.toggle("text-white");
    }
    for (const elem of document.body.getElementsByTagName("h2")) {
      elem.classList.toggle("text-white");
    }
    if (mode === "light") {
      setmode("dark");
      btn.innerText = "Go Light!☀️";
    } else {
      setmode("light");
      btn.innerText = "Go Dark!🌑";
    }
  };
  const [text, setText] = useState("");
  const toUpper = () => {
    let upText = text.toUpperCase();
    setText(upText);
  };
  const toLower = () => {
    let loText = text.toLowerCase();
    setText(loText);
  };
  const textOnChange = (event) => {
    setText(event.target.value);
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };
  const searchMeaning = () => {
    setText(text);
  };
  return (
    <div className="container">
      <Router>
        <Navbar mode={mode} togglemode={togglemode} />
        <Routes>
          {/* for react-router-dom v6 and above Switch is changed to Routes and also in Route component element is needed to be passed */}
          <Route
            exact
            path="/"
            element={
              <div>
                <Home
                  text={text}
                  toUpper={toUpper}
                  toLower={toLower}
                  copyText={copyText}
                  searchMeaning={searchMeaning}
                  textOnChange={textOnChange}
                />
                <Preview text={text} />
              </div>
            }
          />

          <Route exact path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
