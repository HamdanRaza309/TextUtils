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
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.innerHTML === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
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
  };

  const [text, setText] = useState("Enter Here");
  //   text = "new text"; // wrong way to update text
  //   setText("new text"); // right way to update text

  return (
    <>
      <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="7"
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleFirstLetterUppercase}
        >
          Convert First character to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button
          type="submit"
          onClick={handleSpeakClick}
          className="btn btn-primary mx-2"
          id="toggle"
        >
          Speak
        </button>
      </div>

      <div className="container">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>You can read it in {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
