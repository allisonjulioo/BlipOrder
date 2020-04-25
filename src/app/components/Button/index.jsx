import React from "react";

import { GenericButton } from "./styles";

const Button = ({ children, type, onClick }) => (
  <GenericButton type={type} onClick={onClick}>
    {children}
  </GenericButton>
);

export default Button;
