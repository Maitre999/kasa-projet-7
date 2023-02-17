import { Link } from "react-router-dom";
import Card from "../UI/Card";
import LazyImage from "../Utils/LazyLoadImg";

const data = require("../../assets/data.json");

// Component to display the available housing in home page
const AvailableEstate = () => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.id}>
          <Link to={`/housing/${item.id}`}>
            <LazyImage src={item.cover} alt={item.title} />
            <p>{item.title}</p>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default AvailableEstate;
