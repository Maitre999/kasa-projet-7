import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

// RootLayout is the main layout for the app
// It renders the Header, Main and Footer components
// It also renders the children of the Main component
// If there is an error, it renders the children of the Main component
// Otherwise, it renders the children of the Outlet component
const RootLayout = ({ error, children }) => {
  return (
    <>
      <Header />
      <Main err={!error ? undefined : true}>
        {!error ? <Outlet /> : children}
      </Main>
      <Footer />
    </>
  );
};

export default RootLayout;
