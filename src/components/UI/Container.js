import classes from "./Container.module.css";

// This component is used to wrap available Real Estate components
const Container = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
