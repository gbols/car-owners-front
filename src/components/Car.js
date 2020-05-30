import React from "react";
import { Container } from "./Container";

const Car = ({ car }) => {
  console.log({ car });
  return (
    <Container display="flex">
      <div className="car-wrapper">
        <span
          className="car"
          style={{
            backgroundImage: `url(
              "https://source.unsplash.com/user/erondu/1600x900"
            )`,
          }}
        ></span>
      </div>
      <aside className="car-details">
        <h3>
          {car.last_name} {car.first_name}
        </h3>
        <div className="model">
          <div className="model-item">
            <span className="label-text">Brand</span>
            <span>{car.car_model}</span>
          </div>
          <div className="model-item">
            <span className="label-text">Year</span>
            <span>{car.car_model_year}</span>
          </div>
          <div className="model-item">
            <span className="label-text">Color</span>
            <span
              className="color color-details"
              style={{ backgroundColor: car.car_color }}
            ></span>
          </div>
        </div>
        <div className="model">
          <div className="model-item">
            <span className="label-text">Country</span>
            <span>{car.country}</span>
          </div>
          <div className="model-item">
            <span className="label-text">Gender</span>
            <span>{car.gender}</span>
          </div>
          <div className="model-item">
            <span className="label-text">Job</span>
            <span>{car.job_title}</span>
          </div>
        </div>
        <div className="model-item">
          <div className="bio-container">
            <label className="label label-text">Email:</label>
            <span>{car.email}</span>
          </div>
          <div className="bio-container">
            <label className="label label-text">Bio:</label>
            <span>{car.bio}</span>
          </div>
        </div>
      </aside>
    </Container>
  );
};

export { Car };
