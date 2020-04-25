import React from "react";
import logo from "./../../assets/logo.png";

import { Container, Logo } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};

export default Header;
