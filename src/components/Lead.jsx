import React, { Fragment } from "react";

const Lead = ({
  first_name,
  last_name,
  national_identification_number,
  birthdate,
  email,
  score,
}) => {
  return (
    <Fragment>
      <td data-title="Names">{`${first_name} ${last_name}`}</td>
      <td data-title="ID Number">{`${national_identification_number}`}</td>
      <td data-title="Birth date">{`${birthdate}`}</td>
      <td data-title="Email">{`${email}`}</td>
      <td data-title="Score">{`${score}`}</td>
    </Fragment>
  );
};

export default Lead;
