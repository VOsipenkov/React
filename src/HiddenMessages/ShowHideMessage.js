import React from "react";

export const ShowHideMessage = ({ expandCollaps, collapsed, children }) => {
  return (
    <p onClick={expandCollaps}>
      {collapsed ? children.replace(/[a-zA-z1-9]/g, "x") : children}
    </p>
  );
};
