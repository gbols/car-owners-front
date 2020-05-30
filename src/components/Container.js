import React from "react";

const Container = ({ children, ...props }) => {
  return (
    <section className="container" style={{ ...props }}>
      {children}
    </section>
  );
};

export { Container };
