import React, { useState } from "react";

const About = (props) => {
  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "light" ? "white" : "#404040",
  };

  return (
    <div className="container my-5" style={myStyle}>
      <h2 className="mb-4 text-center">About TextUtils</h2>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <p className="lead text-center">
            TextUtils is your go-to tool for text manipulation and analysis,
            designed to simplify your workflow and enhance your productivity.
            With an intuitive interface and versatile features, TextUtils
            empowers users to edit, format, and analyze text effortlessly.
          </p>
          <p className="mt-5 text-center">
            Experience the convenience of TextUtils today and revolutionize the
            way you work with text!
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2 text-center">
          <button
            className={`btn btn-${
              props.mode === "dark" ? "primary" : "dark"
            } mx-2 my-2`}
            onClick={() => handleSectionClick("mission")}
          >
            Our Mission
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "primary" : "dark"
            } mx-2 my-2`}
            onClick={() => handleSectionClick("howItWorks")}
          >
            How It Works
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "primary" : "dark"
            } mx-2 my-2`}
            onClick={() => handleSectionClick("whyTextUtils")}
          >
            Why TextUtils?
          </button>
        </div>
      </div>
      {selectedSection === "mission" && (
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <h3>Our Mission</h3>
            <p>
              TextUtils aims to empower users with the ability to effortlessly
              manipulate and analyze text, providing intuitive tools for tasks
              such as converting text to uppercase, removing extra spaces, and
              analyzing word counts. Our mission is to simplify text-related
              workflows and enhance productivity for individuals and
              professionals alike.
            </p>
          </div>
        </div>
      )}
      {selectedSection === "howItWorks" && (
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <h3>How It Works</h3>
            <p>
              TextUtils offers a straightforward approach to text manipulation
              and analysis. Simply input your text into the provided text area,
              and TextUtils provides a range of tools to help you manipulate and
              analyze your text with ease. From converting text to uppercase or
              lowercase, removing extra spaces, to analyzing word counts and
              readability, TextUtils streamlines the process with intuitive
              functionality.
            </p>
          </div>
        </div>
      )}
      {selectedSection === "whyTextUtils" && (
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <h3>Why TextUtils?</h3>
            <p>
              TextUtils stands out as your go-to tool for text manipulation and
              analysis for several compelling reasons:
            </p>
            <ul>
              <li>
                Seamlessly navigate through a user-friendly interface designed
                for effortless text editing.
              </li>
              <li>
                Access a diverse array of tools catered to a variety of
                text-related tasks, ensuring all your needs are met.
              </li>
              <li>
                Streamline your workflow with efficient processes tailored to
                maximize productivity.
              </li>
              <li>
                Enjoy the flexibility of accessing TextUtils from any device,
                ensuring seamless usage wherever you go.
              </li>
              <li>
                Rely on TextUtils for accurate and reliable results, empowering
                you to achieve your text manipulation goals with confidence.
              </li>
            </ul>
            <p>
              Experience the power and convenience of TextUtils today and see
              why it's the preferred choice for text manipulation and analysis
              by users around the world.
            </p>
          </div>
        </div>
      )}
      <div className="row">
        <h3 className="mt-5">Key Features:</h3>
        <ul className="list-group">
          <li className="list-group-item" style={myStyle}>
            <i className="bi bi-layout-text-sidebar-reverse me-2"></i>
            Intuitive interface for easy text editing
          </li>
          <li className="list-group-item" style={myStyle}>
            <i className="bi bi-justify-left me-2"></i>
            Versatile tools for basic formatting and advanced analysis
          </li>
          <li className="list-group-item" style={myStyle}>
            <i className="bi bi-lightning-charge-fill me-2"></i>
            Fast and efficient workflows for enhanced productivity
          </li>
          <li className="list-group-item" style={myStyle}>
            <i className="bi bi-globe me-2"></i>
            Accessible anytime, anywhere, on any device
          </li>
          <li className="list-group-item" style={myStyle}>
            <i className="bi bi-shield-fill-check me-2"></i>
            Reliable performance with accurate results
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
