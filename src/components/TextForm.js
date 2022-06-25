import React, { useState } from "react";

export default function TextForm(props) {
  let handleuppercaseClick = () => {
    // setText("you have clicked on the convert buttton");
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlart("Converted to UpperCase", "success");
  };

  let handleLowerCaseClick = () => {
    // setText("you have clicked on the convert buttton");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlart("Converted to LowerCase", "success");
  };

  let handleOnChange = (event) => {
    setText(event.target.value);
  };

  let clean = () => {
    setText(" ");
  };

  let handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    // text.setSelectionRange(0, 9999); //for mobile user 😎
    navigator.clipboard.writeText(text.value);
    props.showAlart("Text Copied 😎", "success");
  };

  let removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlart("Extra Spaces Has Been Removed 😎😎", "success");
  };

  const [text, setText] = useState("Enter Text Here"); // the state
  // setText("Text Here"); //to change text value,the correct way 😎
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            Enter Below
          </label>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#121212" : "white",
              border:
                props.mode === "dark" ? "2px solid white" : "2px solid black",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <div>
            <button
              className="btn btn-primary my-2"
              onClick={handleuppercaseClick}
            >
              Convert to Uppercase
            </button>
            <button
              className="btn btn-primary my-2 mx-2"
              onClick={handleLowerCaseClick}
            >
              Convert to Lowercase
            </button>
            <button className="btn btn-dark my-2 mx-2" onClick={clean}>
              Clean Text
            </button>

            <button className="btn btn-dark my-2 mx-2" onClick={handleCopy}>
              Copy Text
            </button>
            <button className="btn btn-dark my-2 mx-2" onClick={removeSpace}>
              Remove Extra Spaces
            </button>
          </div>
        </div>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "white" : "black"
        }`}
      >
        <h2>Enter text Summery</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * 60 * text.split(" ").length} second to read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in to the text box to Preview"}
        </p>
      </div>
    </>
  );
}
