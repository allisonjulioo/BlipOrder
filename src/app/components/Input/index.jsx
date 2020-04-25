import React from "react";

import { GenericInput, GenericTextArea, Label } from "./styles";

const Input = ({ type, placeholder, onChange, label }) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      {type !== "textarea" && (
        <GenericInput
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
      {type === "textarea" && (
        <GenericTextArea placeholder={placeholder} onChange={onChange} />
      )}
    </>
  );
};

export default Input;
