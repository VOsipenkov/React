import React, { Children } from "react";

export const Display = ({ children, truthy = true }) => (
  <div>
    {truthy
      ? findChild(children, WhenTruthy)
      : findChild(children, WhenForbidden)}
  </div>
);

const findChild = (children, child) =>
  Children.toArray(children).filter(c => c.type === child);

export const WhenTruthy = ({ children }) => children;
export const WhenForbidden = ({ children }) => children;
