import React from "react";
import Lead from "./Lead";
import Headers from "./Headers";
import prospectState from "../redux/reducers/prospectsReducer";
import { connect } from "react-redux";

const Prospects = ({ data }) => (
  <section className="prospects">
    <header className="header header__subtitle">
      <h2 id="prospects" className="header__title header__title--section">
        Prospects
      </h2>
    </header>
    <div className="container container--leads">
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
  return {
    data: state.prospectState.data,
  };
};

export default connect(mapStateToProps)(Prospects);
