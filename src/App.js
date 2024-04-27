import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (meassage, type) => {
    setAlert({
      message: meassage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
      // document.title = "TextUtils - Light Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#404040";
      showAlert("Dark Mode is enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          toogleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter your Text to Analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
