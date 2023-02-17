// Main component for the layout of the page (main tag)
const Main = ({ children, err }) => {
  return <main style={!err ? null : { display: "flex" }}>{children}</main>;
};

export default Main;
