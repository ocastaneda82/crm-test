import React from "react";

const Button = ({ text, firstValidation, secondValidation }) => {
  return (
    <button
      className="boton--check"
      onClick={() => {
        console.log("Click en el Button");
        firstValidation("First Validation");
        secondValidation("Second Validation");
      }}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
