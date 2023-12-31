import React from "react";

export default function About(props) {
  const [myStyle, setStyle] = React.useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setbtnText] = React.useState("Enable Dark");
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid green",
      });
      setbtnText("Enable Light");
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("enable Dark");
    }
  };
  return (
    <>
      <div className="container my-5">
        <div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  style={myStyle}
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  TextUtils-1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div style={myStyle} className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  style={myStyle}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  teXt-Utils-2
                </button>
              </h2>
              <div
                style={myStyle}
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body " style={myStyle}>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  style={myStyle}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  TextUtils-3
                </button>
              </h2>
              <div
                style={myStyle}
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-dark my-3 mx-2"
          style={myStyle}
          onClick={toggleStyle}
        >
          {btnText}
        </button>
      </div>
    </>
  );
}
