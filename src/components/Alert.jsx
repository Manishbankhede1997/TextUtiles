import React from "react";

export default function Alert(props) {
  const capitalization = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {capitalization(props.alert.type)}:{props.alert.msg}
        </div>
      )}
    </div>
  );
}
