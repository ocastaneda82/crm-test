import React from "react";

import prospectState from "../redux/reducers/prospectsReducer";
import { get_prospects } from "../redux/actions/prospectsAction";
import { connect } from "react-redux";

const Button = ({ text, thirdValidation, data, get_prospects }) => {
  const prospectsClick = (data) => {
    get_prospects({
      data: data,
    });
  };
  return (
    <button
      className="boton--check"
      onClick={() => {
        thirdValidation("Third one done!")
          .then((result) => {
            console.log(result);
            // prospectsClick("Ya casi");
            prospectsClick(result);
          })
          .catch((err) => console.log(err));
      }}
    >
      <span>{text}</span>
    </button>
  );
};

const mapStateToProps = (state) => {
  console.log("Estado recibido ", state);
  return {
    data: state.prospectState.data,
  };
};

export default connect(mapStateToProps, { get_prospects })(Button);
// export default Button;
