import React from "react";
import Lead from "./Lead";
import prospectState from "../redux/reducers/prospectsReducer";
import { connect } from "react-redux";

const Prospects = ({ data }) => (
  <section>
    <h2>Prospects</h2>
    <div className="row">
      <div className="row__header">
        <div>First Name</div>
        <div>Last Name</div>
        <div>National Identification Number</div>
        <div>Birth Date</div>
        <div>Email</div>
      </div>
      {data.map((lead, index) => (
        <div className="row__item" key={index}>
          <Lead key={index} {...lead} />
        </div>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => {
  // console.log("Estado recibido ", state);
  return {
    data: state.prospectState.data,
  };
};

export default connect(mapStateToProps)(Prospects);
// export default Prospects;
