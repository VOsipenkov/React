import React, { Component } from "react";
import fetch from "isomorphic-fetch";

export const People = ({ data, loading = false, loaded = true }) => {
  console.log(data);
  return loading ? (
    "loading process.."
  ) : (
    <ol>
      {data.results.map(item => {
        const { last, first } = item.name;
        console.log(last);
        return (
          <li>
            {first}:{last}
          </li>
        );
      })}
    </ol>
  );
};
