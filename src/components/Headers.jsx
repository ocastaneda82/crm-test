import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <th>
        <h5>Names</h5>
      </th>
      <th>
        <h5>ID Number</h5>
      </th>
      <th>
        <h5>Birth Date</h5>
      </th>
      <th>
        <h5>Email</h5>
      </th>
      <th className="score">
        <h5>Score</h5>
      </th>
    </Fragment>
  );
};

export default Header;
