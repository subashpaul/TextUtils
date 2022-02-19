import React from "react";

export default function Preview(props) {
  return (
    <div>
      <div>
        <h2 className="head">Text Summary</h2>
        <p className="para text-secondary">
          {
            props.text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words {props.text.length} characters
        </p>
        <p className="para text-secondary">
          {(0.008 * props.text.length).toFixed(2)} minutes to read.
        </p>
      </div>
      <h2 className="head">Preview</h2>
      <div className="card" style={{ height: "20rem" }}>
        <div className="card-body text-secondary">
          <p style={{ whiteSpace: "pre-line" }}>
            {props.text.length === 0
              ? "Type Something to Preview"
              : props.text === "\n"
              ? "&nbsp"
              : props.text}
          </p>
        </div>
      </div>
    </div>
  );
}
