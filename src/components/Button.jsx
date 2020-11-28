import React from "react";

const Button = ({
  text,
  firstValidation,
  secondValidation,
  thirdValidation,
}) => {
  return (
    <button
      className="boton--check"
      onClick={() => {
        // console.log("Click en el Button");
        // await firstValidation("First Validation");
        // await secondValidation("Second Validation");
        thirdValidation("Third one done!");
      }}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
