import React from "react";

function Alert(props) {
  const capitalize = (str) => {
    let word = str.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };
  return (
    <div style={{ height: "50px" }}>
      {/*Check if alert object exists and is truthy */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {/* Display the alert message */}
          <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}.
        </div>
      )}
    </div>
  );
}

export default Alert;
