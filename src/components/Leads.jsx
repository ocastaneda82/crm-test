import React from "react";
import crm_data from "../data";
import Lead from "./Lead";
import Button from "./Button";

const Leads = () => {
  const firstValidationFunction = async (text) => {
    console.log(text);
    const externalData = await getExternalLeads();
    const internalData = crm_data.data;
    const finalResult = [];
    internalData.forEach((lead) => {
      const resultado = externalData.find((leadExt) => {
        return (
          leadExt.first_name === lead.first_name &&
          leadExt.last_name === lead.last_name &&
          leadExt.national_identification_number ===
            lead.national_identification_number &&
          leadExt.birthdate === lead.birthdate &&
          leadExt.email === lead.email
        );
      });
      if (resultado !== undefined) {
        finalResult.push(resultado);
      }
    });
    console.log(finalResult);
  };
  const secondValidationFunction = async (text) => {
    console.log(text);
    const externalData = await getExternalLeads();
    const resultado = externalData.filter((leadExt) => {
      return leadExt.judicial_records === false;
    });
    console.log(resultado);
  };

  // consulto datos externos
  const getExternalLeads = async () => {
    const res = await fetch(
      "http://68.183.97.181/checkproyects/items/crm_test"
    );
    const data = await res.json();
    return data.data;
  };
  return (
    <section>
      <h2>Leads</h2>
      <div className="row">
        <div className="row__header">
          <div>First Name</div>
          <div>Last Name</div>
          <div>National Identification Number</div>
          <div>Birth Date</div>
          <div>Email</div>
        </div>
        {crm_data.data.map((lead, index) => (
          <div className="row__item" key={index}>
            <Lead key={index} {...lead} />
          </div>
        ))}
      </div>
      <Button
        text="Check"
        firstValidation={firstValidationFunction}
        secondValidation={secondValidationFunction}
      />
    </section>
  );
};

export default Leads;
