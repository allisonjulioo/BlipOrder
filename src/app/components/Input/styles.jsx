import styled from "styled-components";
import { secondary, white, grey } from "./../../colors";
import { height, radius } from "./../../constants";

export const Label = styled.label`
  display: block;
  color: ${secondary};
  font-size: 16px;
  margin-bottom: 12px;
`;

export const GenericInput = styled.input`
  height: ${height}px;
  border-radius: ${radius}px;
  min-width: 182px;
  font-size: 16px;
  padding: 16px;
  margin: 4px;
  background: ${white};
  cursor: text;
  outline: none;
  border: 1px solid ${grey};
  color: ${secondary};
  @media (max-width: 981px) {
    width: 100%;
  }
`;
export const GenericTextArea = styled.textarea`
  min-height: ${height + 40}px;
  resize: vertical;
  border-radius: ${radius}px;
  min-width: 182px;
  font-size: 16px;
  padding: 16px;
  margin: 4px;
  background: ${white};
  cursor: text;
  outline: none;
  border: 1px solid ${grey};
  color: ${secondary};
`;
