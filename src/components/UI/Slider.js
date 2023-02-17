import React, { useEffect, useState, useRef } from "react";
import classes from "./Slider.module.css";
import Btn from "../../assets/BtnSlider.svg";
import LazyImage from "../Utils/LazyLoadImg";

// ImageSlider component
// images: array of images to be displayed
const ImageSlider = ({ images }) => {
  // State and handlers
  // currentImageIndex: index of the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // previousImage: image displayed before the current one
  const [, setPreviousImage] = useState(null);
  // nextImage: image displayed after the current one
  const [, setNextImage] = useState(null);
  // rotation: rotation of the image container
  const [rotation, setRotation] = useState(0);
  // touchStartX: x coordinate of the touch start event
  const [touchStartX, setTouchStartX] = useState(null);
  // touchEndX: x coordinate of the touch end event
  const [touchEndX, setTouchEndX] = useState(null);

  // Ref
  // imageRef: reference to the image container
  const imageRef = useRef(null);

  // Callback
  // handleImageLoaded: callback called when an image is loaded
  // handle: index of the image to be displayed
  // Note: the callback is called after a delay to avoid a flickering effect
  const handleImageLoaded = (handle) => {
    setTimeout(() => {
      setCurrentImageIndex(handle);
    }, 250);
  };

  // Effect
  // Preload previous and next images
  // Note: the effect is called when the images array or the current image index
  // changes to preload the previous and next images and to avoid a flickering effect
  useEffect(() => {
    // Preload previous and next images
    const previousIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    const nextIndex =
      currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    const previousImg = new Image();
    previousImg.src = images[previousIndex];
    setPreviousImage(previousImg);
    const nextImg = new Image();
    nextImg.src = images[nextIndex];
    setNextImage(nextImg);
  }, [images, currentImageIndex]);

  // Effect to rotate the image container
  // Note: the effect is called when the current image index changes to rotate the image container
  const handlePrevious = () => {
    const previousIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    handleImageLoaded(previousIndex);
    setRotation((rotation) => rotation - 180);
  };

  // Callback to rotate the image container
  // Note: the callback is called when the right button is clicked or when the right arrow button is clicked
  const handleNext = () => {
    const nextIndex =
      currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;

    handleImageLoaded(nextIndex);
    setRotation((rotation) => rotation + 180);
  };

  // Callback to rotate the image container
  // Note: the callback is called when the left or right key is pressed to rotate the image container
  const handleKeyDown = (event) => {
    event.key === "ArrowLeft" && handlePrevious();
    event.key === "ArrowRight" && handleNext();
  };

  // Callback to rotate the image container
  // Note: the callback is called when the user starts to touch the screen to rotate the image container
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
    setTouchEndX(null);
  };

  // Callback to rotate the image container
  // Note: the callback is called when the user moves the finger on the screen to rotate the image container
  const handleTouchMove = (event) => {
    setTouchEndX(event.touches[0].clientX);
  };

  // Callback to rotate the image container
  // Note: the callback is called when the user stops touching the screen to rotate the image container
  const handleTouchEnd = () => {
    if (touchEndX && touchStartX && touchEndX < touchStartX) {
      handlePrevious();
    } else if (touchEndX && touchStartX && touchEndX > touchStartX) {
      handleNext();
    }
  };

  // Render
  return (
    <div
      className={classes.slider}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      <button
        type="button"
        disabled={images.length === 1}
        className={`${classes.btn} ${classes.left}`}
        onClick={handlePrevious}
      >
        <LazyImage src={Btn} alt="Bouton gauche" />
      </button>
      <div
        className={classes["image-container"]}
        style={{ transform: `rotateY(${rotation}deg)` }}
        ref={imageRef}
      >
        <LazyImage src={images[currentImageIndex]} alt={"Slider"} />
      </div>
      <button
        type="button"
        disabled={images.length === 1}
        className={`${classes.btn} ${classes.right}`}
        onClick={handleNext}
      >
        <LazyImage src={Btn} alt="Bouton droite" />
      </button>
    </div>
  );
};

export default ImageSlider;
