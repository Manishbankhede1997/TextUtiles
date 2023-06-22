import React from "react";

export default function TextForm(props) {
  const [text, setText] = React.useState("");
  const handleOnClick = (event) => {
    setText(event.target.value);
  };
  const changeToUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("success", ":changed successfully");
  };
  const changeTolower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const deleteWholeText = () => {
    setText("");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h3>{props.heading}</h3>
        <div>
          <div className="mb-3 my-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              TextArea
            </label>
            <textarea
              className="form-control"
              value={text}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#366466",
              }}
              onChange={handleOnClick}
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1 "
          onClick={changeToUp}
        >
          ChangeIntoUpper
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={changeTolower}
        >
          ChangeIntoLowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-1"
          onClick={deleteWholeText}
        >
          clearText
        </button>

        <div className="container my-3">
          <h3>Text Counter</h3>
          <p>
            word{" "}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            and character {text.length}
          </p>
          <p>
            reading time ={" "}
            {0.008 *
              text.split().filter((ele) => {
                return ele.length !== 0;
              }).length}{" "}
            minute
          </p>
        </div>
      </div>
    </>
  );
}
