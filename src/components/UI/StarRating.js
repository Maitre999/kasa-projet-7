import classes from "./StarRating.module.css";

// Star component
// filled: true if the star is filled
// key: index of the star
// Note: the key is used by React to identify each element in the list
// and to optimize the rendering process
const Star = ({ filled }) => (
  <span
    className={classes.star}
    style={{ color: filled ? "#FF6060" : "#E3E3E3" }}
  >
    &#9733;
  </span>
);

// StarRating component
// rating: number of stars to be filled
const StarRating = ({ rating }) => (
  <div>
    {[1, 2, 3, 4, 5].map((index) => (
      <Star filled={index <= rating} key={index} />
    ))}
  </div>
);

export default StarRating;
