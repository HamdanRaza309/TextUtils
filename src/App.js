import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About Us" />
      <div className="container">
        <TextForm heading="Enter your Text to Analyze" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
