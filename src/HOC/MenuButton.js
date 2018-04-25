import React from "react";

export const MenuButton = ({
  collapsed,
  children,
  expandCollaps,
  txt = "click"
}) => {
  return (
    <div className="popup-button">
      <button onClick={expandCollaps}>{txt}</button>
      {collapsed ? "" : <div>{children}</div>}
    </div>
  );
};
