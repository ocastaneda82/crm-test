import React from "react";
import crm_data from "../data";
import Lead from "./Lead";
import Button from "./Button";
import Headers from "./Headers";

const Leads = () => {
  const firstValidationFunction = async (text) => {
    const externalData = await getExternalLeads();
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
    console.log(text);
    return partialResult;
  };
  const secondValidationFunction = async (text) => {
    const externalData = await getExternalLeads();
    const resultado = externalData.filter((leadExt) => {
      return leadExt.judicial_records === false;
    });
    console.log(text);
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
    console.log(text);
    console.log(resultFirst);
    console.log(resultSecond);
    const finalResult = RandomScore(partialResult);
    console.log(finalResult);
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

  // external data
  const getExternalLeads = async () => {
    const res = await fetch(
      "http://68.183.97.181/checkproyects/items/crm_test"
    );
    const data = await res.json();
    return data.data;
  };
  return (
    <section className="leads">
      <header className="header">
        <h2 className="header__title">Leads</h2>
      </header>
      <div className="main">
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
      <Button text="Check" thirdValidation={thirdValidationFunction} />
    </section>
  );
};

export default Leads;
