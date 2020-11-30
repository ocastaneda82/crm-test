import React, { useEffect } from "react";
import crm_data from "../data";
import Lead from "./Lead";
import Button from "./Button";
import Headers from "./Headers";

import { connect } from "react-redux";

import { fetchData, get_extdata } from "../redux/actions/extDataAction.js";
import extdataState from "../redux/reducers/extDataReducer";

const Leads = ({ extdata, loading, get_extdata, fetchData }) => {
  const firstValidationFunction = async (text) => {
    const externalData = extdata;
    const internalData = crm_data.data;
    const partialResult = [];
    internalData.forEach((lead) => {
      const result = externalData.find((leadExt) => {
        return (
          leadExt.first_name === lead.first_name &&
          leadExt.last_name === lead.last_name &&
          leadExt.national_identification_number ===
            lead.national_identification_number &&
          leadExt.birthdate === lead.birthdate &&
          leadExt.email === lead.email
        );
      });
      if (result !== undefined) {
        partialResult.push(result);
      }
    });
    return partialResult;
  };
  const secondValidationFunction = async (text) => {
    const externalData = extdata;
    const resultado = externalData.filter((leadExt) => {
      return leadExt.judicial_records === false;
    });
    return resultado;
  };

  const thirdValidationFunction = async (text) => {
    const resultFirst = await firstValidationFunction("First one done!");
    const resultSecond = await secondValidationFunction("Second one done!");
    const partialResult = [];
    resultFirst.forEach((lead) => {
      const result = resultSecond.find((leadExt) => {
        return (
          leadExt.first_name === lead.first_name &&
          leadExt.last_name === lead.last_name &&
          leadExt.national_identification_number ===
            lead.national_identification_number &&
          leadExt.birthdate === lead.birthdate &&
          leadExt.email === lead.email
        );
      });
      if (result !== undefined) {
        partialResult.push(result);
      }
    });
    const finalResult = RandomScore(partialResult);
    return finalResult;
  };

  const RandomScore = (partialResult) => {
    partialResult.forEach((lead) => {
      lead.score = Math.floor(Math.random() * 101);
    });
    const finalResult = partialResult.filter((leadScored) => {
      return leadScored.score >= 60;
    });
    return finalResult;
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <section className="leads">
      <header className="header header__subtitle">
        <h2 className="header__title header__title--section">Leads</h2>
        <Button text="Check" thirdValidation={thirdValidationFunction} />
      </header>
      <div className="container container--leads">
        <table>
          <thead>
            <tr>
              <Headers />
            </tr>
          </thead>
          <tbody>
            {crm_data.data.map((lead, index) => (
              <tr key={index}>
                <Lead key={index} {...lead} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer>
        <Button text="Check" thirdValidation={thirdValidationFunction} />
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    extdata: state.extdataState.extdata,
    loading: true,
  };
};

export default connect(mapStateToProps, { get_extdata, fetchData })(Leads);
