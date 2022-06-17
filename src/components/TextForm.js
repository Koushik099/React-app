import React, { useState } from "react";

export default function TextForm(props) {
  let handleuppercaseClick = () => {
    // setText("you have clicked on the convert buttton");
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  let handleLowerCaseClick = () => {
    // setText("you have clicked on the convert buttton");
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  let handleOnChange = (event) => {
    console.log("On change");

    setText(event.target.value);
  };

  // let copy = () => {
  //   text.select();
  //   text.setSelectionRange(0, 99999);
  //   navigator.clipboard.writeText(text);
  // };

  let clean = () => {
    setText(" ");
  };

  const [text, setText] = useState("Enter Text Here"); // the state
  // setText("Text Here"); //to change text value,the correct way 😎
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            Enter Below
          </label>
          <textarea
            className="form-control"
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
              convert to Uppercase
            </button>
            <button
              className="btn btn-primary my-2 mx-2"
              onClick={handleLowerCaseClick}
            >
              convert to Lowercase
            </button>
            <button className="btn btn-dark my-2 mx-2" onClick={clean}>
              Clean
            </button>

            <button className="btn btn-dark my-2 mx-2">Copy</button>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h2>Enter text Summery</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * 60 * text.split(" ").length} second to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
