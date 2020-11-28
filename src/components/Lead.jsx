import React, { Fragment } from "react";

const Lead = ({
  first_name,
  last_name,
  national_identification_number,
  birthdate,
  email,
}) => {
  return (
    <Fragment>
      <div>{`${first_name}`}</div>
      <div>{`${last_name}`}</div>
      <div>{`${national_identification_number}`}</div>
      <div>{`${birthdate}`}</div>
      <div>{`${email}`}</div>
    </Fragment>
  );
};

export default Lead;
