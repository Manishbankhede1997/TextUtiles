import React from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
// import About from "./About";
import Alert from "./Alert";
export default function HomePage({
  mode,
  toggleMode,
  pinkMode,
  showAlert,
  alert,
}) {
  return (
    <div className="container">
      <Navbar
        title="TextUtils"
        mode={mode}
        alert={alert}
        showAlert={showAlert}
        toggleMode={toggleMode}
        pinkMode={pinkMode}
        aboutText="about us"
      />
      <Alert alert={alert} />

      <TextForm
        heading="TextUtils-Uppercase to LowerCase ,,LowerCase to UpperCase"
        mode={mode}
        pinkMode={pinkMode}
        showAlert={showAlert}
        className="my-3"
      />
      {/* <About /> */}
    </div>
  );
}
