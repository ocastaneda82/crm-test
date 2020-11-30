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

  const goToElement = () => {
    const elem = document.getElementById("prospects");
    const found = window.scrollY + elem.getBoundingClientRect().top;
    window.scrollTo(0, found);
  };
  return (
    <button
      className="boton boton--check"
      onClick={() => {
        thirdValidation("Third one done!")
          .then((result) => {
            console.log(result);
            prospectsClick(result);
          })
          .catch((err) => console.log(err))
          .then(() => goToElement());
      }}
    >
      <span>{text}</span>
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.prospectState.data,
  };
};

export default connect(mapStateToProps, { get_prospects })(Button);
