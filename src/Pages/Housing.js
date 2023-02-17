import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ImageSlider from "../components/UI/Slider";
import StarRating from "../components/UI/StarRating";
import Expandable from "../components/UI/Expandable";
import data from "../assets/data.json";

import classes from "./Housing.module.css";
import LazyImage from "../components/Utils/LazyLoadImg";

// Example of how to use the fetch API
// Get the data from the API, to be used inside component
// useEffect(() => {
//   async function fetchData() {
//     try {
//       const response = await fetch("https://api.example.com/housing");
//       const data = await response.json();
//       // do something with the data here
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//
//   fetchData();
// }, []);

// This is the page that displays the details of a housing
const HousingPage = () => {
  const params = useParams();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the item in the data
  const item = data.find((item) => item.id === params.id);
  if (!item) {
    // If the item is not found, redirect to the error page throw not-existent path (404)
    return <Navigate to={"/error"} />;
  }

  // Display the housing content
  return (
    <>
      <ImageSlider images={item.pictures} />
      <section className={classes["housing-info"]}>
        <div className={classes["info-container"]}>
          <div className={classes["first-container"]}>
            <h1 className={classes.title}>{item.title}</h1>
            <p className={classes.location}>{item.location}</p>
            <ul className={classes.tags}>
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className={classes["host-container"]}>
            <div className={classes["host-info"]}>
              <h2>{item.host.name}</h2>
              <LazyImage
                className={classes["host-photo"]}
                src={item.host.picture}
                alt={"Profil"}
              />
            </div>
            <StarRating rating={item.rating} />
          </div>
        </div>
        <div className={classes.expandable}>
          <Expandable title="Description" content={item.description} />
          <Expandable title="Equipements" content={item.equipments} />
        </div>
      </section>
    </>
  );
};

export default HousingPage;
