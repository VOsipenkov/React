import React from "react";

export const Countries = ({ data, selected = "Angola" }) => {
  return (
    <select className="country - list" defaultValue="Turkey">
      {data.map(({ name }, key) => {
        console.log(name);
        return (
          <option key={key} value={name}>
            {name}
          </option>
        );
      })}
    </select>
  );
};
