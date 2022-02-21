import React from "react";

export default function Home(props) {
  return (
    <div>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h2 className="head my-3">Enter Your Text Here</h2>
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        placeholder="Enter your here"
        value={props.text}
        onChange={props.textOnChange}
        style={{ backgroundColor: "rgb(255 243 230)" }}
      ></textarea>
      <div className="row">
        <div className="col-md-3">
          <button
            disabled={props.text.length === 0}
            className="btn btn-primary my-3"
            onClick={props.toUpper}
          >
            To Upper Case
          </button>
        </div>
        <div className="col-md-3">
          <button
            disabled={props.text.length === 0}
            className="btn btn-primary my-3 ms-2"
            onClick={props.toLower}
          >
            To Lower Case
          </button>
        </div>
        <div className="col-md-3">
          <button
            disabled={props.text.length === 0}
            className="btn btn-primary my-3 ms-2 "
            onClick={props.copyText}
          >
            Copy Text
          </button>
        </div>
        <div className="col-md-3">
          <button
            disabled={props.text.length === 0}
            className="btn btn-primary my-3 ms-2"
            onClick={props.clearText}
          >
            Clear Text
          </button>
        </div>
      </div>
    </div>
  );
}
