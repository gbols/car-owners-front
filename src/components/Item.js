import React from "react";

const Item = ({ styleName, children, ...props }) => {
  return (
    <li className={styleName} style={{ ...props }}>
      {children}
    </li>
  );
};

export { Item };
