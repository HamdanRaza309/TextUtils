import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const handleOnClick = () => {
    // console.log("Uppercase was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to lowercase", "success");
  };

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.innerHTML === "Speak") {
      toogle.innerHTML = "Stop";
      props.showAlert("Speaking mode is turned On", "success");
    } else {
      toogle.innerHTML = "Speak";
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
        props.showAlert("Speaking mode is turned Off", "success");
      }
    }
  };

  // Function to capitalize  first letter of each word
  const handleFirstLetterUppercase = () => {
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    const upper = text.split(" ").map(capitalize).join(" ");
    setText(upper);
    props.showAlert(
      "First letter of every word is converted to uppercase",
      "success"
    );
  };

  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //removes all currently selected text ranges within the document.
    props.showAlert("Text is copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text is cleard", "success");
  };

  const [text, setText] = useState("");
  //   text = "new text"; // wrong way to update text
  //   setText("new text"); // right way to update text

  return (
    <>
      <div
        className="container mb-3 my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#404040" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          id="myBox"
          rows="7"
        ></textarea>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleOnClick}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleFirstLetterUppercase}
        >
          First character to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleLowClick}
        >
          Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="submit"
          onClick={handleSpeakClick}
          className={`btn btn-${
            props.mode === "dark" ? "primary" : "dark"
          } mx-2 my-2`}
          id="toggle"
        >
          Speak
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleCopyText}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "primary" : "dark"
          } mx-2 my-2`}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          You can read it in{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes or{" "}
          {0.48 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          seconds
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
