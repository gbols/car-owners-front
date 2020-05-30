import React, { useState } from "react";
import { Filter } from "./components/Filter";
import { Car } from ".//components/Car";
import { useFetch } from "./Hooks/useFetch";
import { postData } from "./utils/postData";
import "./App.css";

function App() {
  const [optionStatus, optionData] = useFetch(
    "https://car-owners-ass.herokuapp.com/api/v1/user/1"
  );
  const options = [
    {
      id: 1,
      start_year: 1991,
      end_year: 2009,
      gender: "Male",
      countries: [
        "Brazil",
        "Ireland",
        "Egypt",
        "Poland",
        "Niger",
        "Greece",
        "Peru",
      ],
      colors: ["Green", "Violet", "Yellow", "Blue"],
    },
    {
      id: 2,
      start_year: 1990,
      end_year: 2010,
      gender: "",
      countries: ["Russia", "Portugal", "Vietnam", "Croatia", "Uganda", "Iran"],
      colors: ["Teal", "Maroon", "Red"],
    },
    {
      id: 3,
      start_year: 2001,
      end_year: 2009,
      gender: "Female",
      countries: [],
      colors: ["Red", "Aquamarine", "Orange", "Mauv"],
    },
    {
      id: 4,
      start_year: 1990,
      end_year: 2000,
      gender: "",
      countries: ["United States"],
      colors: [],
    },
    {
      id: 5,
      start_year: 2000,
      end_year: 2009,
      gender: "",
      countries: [
        "Myanmar",
        "South Africa",
        "Nicaragua",
        "Finland",
        "Cuba",
        "Mexico",
      ],
      colors: [],
    },
  ];

  const [cars, setCar] = useState({ loading: false, result: null });

  const handleOptions = async (opts) => {
    if (opts.gender) {
      opts.gender = opts.gender[0].toUpperCase() + opts.gender.substring(1);
    }
    setCar({ loading: true, result: null });
    const result = await postData(
      "https://car-owners-ass.herokuapp.com/api/v1/filter",
      opts
    );
    setCar({ loading: false, result });
  };

  if (optionStatus === "pending" || optionStatus === "idle") {
    return <div>Loading .... </div>;
  }

  if (optionStatus === "rejected") {
    return <h1 className="logo">There was an error loading data</h1>;
  }
  if (optionStatus === "resolved") {
    return (
      <>
        <h1 className="logo">Car Dealers</h1>
        {options.map((option, i) => (
          <Filter option={option} key={i} handleOptions={handleOptions} />
        ))}
        <h1 className="logo">Here are you options</h1>
        {cars.result && cars.result.success ? (
          cars.result.result.map((car, i) => <Car car={car} key={i} />)
        ) : (
          <div> No match was found for using the provided query </div>
        )}
      </>
    );
  }
}

export default App;
