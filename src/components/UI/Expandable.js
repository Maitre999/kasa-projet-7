import React, { useEffect, useRef, useState } from "react";
import classes from "./Expandable.module.css";
import Btn from "../../assets/BtnSlider.svg";

// Expandable component
const Expandable = ({ title, content }) => {
  // State for the expandable
  const [isExpanded, setExpanded] = useState(false);
  // State for the height of the expandable
  const [height, setHeight] = useState(0);
  // Ref for the expandable
  const myElementRef = useRef(null);
  // Function to toggle the expandable
  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  // Set the height of the expandable
  useEffect(() => {
    const myElement = myElementRef.current.children[2];
    myElement.scrollHeight > 0 && setHeight(myElement.scrollHeight);
  }, []);

  // Function to toggle the height of the expandable to 0 or the height of the content for the animation,
  // height auto is not properly working with transition
  const handleToggleHeight = () => {
    const myElement = myElementRef.current.children[2];
    myElement.style.height =
      myElement.style.height === "0px" ? `${height}px` : "0px";
  };

  // Return the expandable
  return (
    <div ref={myElementRef} className={classes["container-expandable"]}>
      <h3
        className={classes.title}
        onClick={() => {
          handleClick();
          handleToggleHeight();
        }}
      >
        {title}
      </h3>
      <img
        style={{
          pointerEvents: "none",
          transform:
            isExpanded && "rotate(90deg) translate(80%, 64%) scale(-1, 1)",
        }}
        className={classes.btn}
        src={Btn}
        alt="Bouton"
        onClick={handleClick}
      />

      <div
        style={{
          height: "0px",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
        className={`${classes.expandable} ${
          isExpanded ? classes.opened : classes.closed
        }`}
      >
        {Array.isArray(content) ? (
          <ul className={classes["equip-listing"]}>
            {content.map((item, index) => (
              <li className={classes["equip-list"]} key={index}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Expandable;
