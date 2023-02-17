import React from "react";
import StaticImg from "../components/UI/staticImg";
import Container from "../components/UI/Container";
import AvailableEstate from "../components/RealEstate/AvailableEstate";

// Home 'Page'
function Home() {
  return (
    <>
      <StaticImg
        img={"./firstBannerImg.jpg"}
        txt={"Chez vous, partout et ailleurs"}
        alt={"Belle vue"}
      />
      <Container>
        <AvailableEstate />
      </Container>
    </>
  );
}

export default Home;
