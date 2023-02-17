import classes from "./Card.module.css";

// Card component is a wrapper component that wraps around other components
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
