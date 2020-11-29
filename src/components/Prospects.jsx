import React from "react";
import Lead from "./Lead";
import Headers from "./Headers";
import prospectState from "../redux/reducers/prospectsReducer";
import { connect } from "react-redux";

const Prospects = ({ data }) => (
  <section className="prospects">
    <header className="header">
      <h2 className="header__title">Prospects</h2>
    </header>
    <div className="main">
      <table>
        <thead>
          <tr>
            <Headers />
          </tr>
        </thead>
        <tbody>
          {data.map((lead, index) => (
            <tr key={index}>
              <Lead key={index} {...lead} />
            </tr>
          ))}
        </tbody>
      </table>
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
