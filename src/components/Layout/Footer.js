import Logo from "../UI/Logo";

// Color of the logo
const colorLogo = "#fff";

// Footer component with the logo and the copyrigth text
const Footer = () => {
  return (
    <footer className={"footer"}>
      <Logo className={"logo-footer"} fill={colorLogo} />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
