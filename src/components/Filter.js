import React from "react";
import { Container } from "./Container";
import { Item } from "./Item";

const Filter = ({ option, handleOptions }) => {
  return (
    <div onClick={() => handleOptions(option)}>
      <Container>
        <h1 className="heading">
          {option.start_year} - {option.end_year}
        </h1>
        <div className="gender">{option.gender}</div>
        <ul className="all-countries">
          {option.countries.map((country, i) => (
            <Item styleName="country" key={i}>
              {country}
            </Item>
          ))}
        </ul>
        <ul className="color-container">
          {option.colors.map((color, i) => (
            <Item styleName="color" backgroundColor={color} key={i} />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export { Filter };
