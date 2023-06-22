import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
function App() {
  const [mode, setMode] = React.useState("light");
  const [alert, setAlert] = React.useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success : dark mode has been enabled");
      document.title = "TextUtils-Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success : light mode has been enabled");
      document.title = "TextUtils-light";
    }
  };

  const pinkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "green";

      showAlert("success : green mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success : light mode has been enabled");
    }
  };

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              mode={mode}
              toggleMode={toggleMode}
              pinkMode={pinkMode}
              showAlert={showAlert}
              alert={alert}
            />
          }
        />
        <Route
          path="/Navbar"
          element={
            <Navbar
              title="TextUtils"
              mode={mode}
              toggleMode={toggleMode}
              pinkMode={pinkMode}
              aboutText="about us"
            />
          }
        />
        <Route path="/Alert" element={<Alert alert={alert} />} />
        {/* // <Alert alert={alert} /> */}
        <Route
          path="/TextForm"
          element={
            <TextForm
              heading="TextUtils-Uppercase to LowerCase ,,LowerCase to UpperCase"
              mode={mode}
              pinkMode={pinkMode}
              showAlert={showAlert}
              className="my-3"
            />
          }
        />
        {/* // <TextForm */}
        {/* // heading="Write something For change" // mode={mode} */}
        {/* // pinkMode={pinkMode}
        // showAlert={showAlert}
        // className="my-3" */}
        {/* // /> */}
        <Route path="/About" element={<About />} />
        {/* // <About /> */}
      </Routes>
    </>
  );
}

export default App;
