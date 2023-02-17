import React, { useState, useEffect, useRef } from "react";
import classes from "./LazyLoadImg.module.css";

// LazyImage component, takes src, alt and className as props
// src is the image source, alt is the alt text for the image and className is the class name for the image if needed
// the component uses IntersectionObserver to check if the image is in the viewport
// if it is, it sets the image source to the src prop
// if not, it sets the image source to an empty string
// the image source is then used to render the image
const LazyImage = ({ src, alt, className }) => {
  // add a state for the image source
  const [imageSrc, setImageSrc] = useState("");
  // add a ref for the image
  // ref is used to observe the image
  const [imageRef, setImageRef] = useState(null);
  // add a state for loading
  const [isLoading, setIsLoading] = useState(true); // add a state for loading

  // add a ref for the observer
  const observer = useRef(null);

  // add an effect to set the image source to an empty string
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            setImageSrc(src) &&
            observer.current.unobserve(entry.target)
        );
      },
      { threshold: 0.1 }
    );

    // add the image to the observer
    imageRef && observer.current.observe(imageRef);

    // remove the image from the observer on unmount
    return () => {
      imageRef && observer.current.unobserve(imageRef);
    };
  }, [imageRef, src]);

  // add a useEffect to set isLoading to true on image source change
  // this is used to show the loading spinner
  // the loading spinner is hidden when the image is loaded
  // this is done by setting isLoading to false on load
  return (
    <div className={classes["lazy-image-container"]}>
      {" "}
      {/* add a container */}
      <img
        src={imageSrc}
        alt={alt}
        ref={setImageRef}
        onLoad={() => setIsLoading(false)} // set isLoading to false on load
        className={`${className ? className : ""} ${classes["lazy-image"]} ${
          isLoading ? classes.loading : ""
        }`} // add the classes
      />
      {isLoading && <div className={classes["loading-spinner"]} />}
    </div>
  );
};

export default LazyImage;
