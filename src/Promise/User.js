import React from "react";

const User = ({ name, picture, email, location }) => (
  <div>
    <h1>
      {name.first}:{name.last}
      <img src={picture.medium} />
      <span>{location.city}</span>
    </h1>
  </div>
);

export default User;
