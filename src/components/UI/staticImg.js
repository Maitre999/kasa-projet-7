import classes from "./staticImg.module.css";
import LazyImage from "../Utils/LazyLoadImg";

// Banner image component
// props: img, alt, txt
// txt: boolean, if true, display welcome text
const StaticImg = (props) => {
  return (
    <div className={classes["static-img"]}>
      {props.txt && (
        <p className={classes.welcome}>Chez vous, partout et ailleurs</p>
      )}
      <LazyImage src={props.img} alt={props.alt} />
    </div>
  );
};

export default StaticImg;
