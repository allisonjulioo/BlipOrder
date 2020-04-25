import styled from "styled-components";
import { GenericButton } from "./../../components/Button/styles";
import { GenericInput, GenericTextArea } from "./../../components/Input/styles";
import { secondary } from "./../../colors";

export const Container = styled.div`
  max-width: 1280px;
  margin: 40px auto 0;
`;
export const Form = styled.form`
  margin: 0 auto;
  width: 600px;
  @media (max-width: 981px) {
    width: 90%;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 981px) {
    overflow: auto;
  }
`;
export const Title = styled.h1`
  margin: 20px auto;
`;
export const Label = styled.label`
  display: block;
  color: ${secondary};
  font-size: 16px;
  margin-bottom: 12px;
`;
export const Input = styled(GenericInput)`
  margin: 0 auto 12px;
  width: 100%;
`;
export const TextArea = styled(GenericTextArea)`
  margin: 0 auto 12px;
  width: 100%;
`;
export const Button = styled(GenericButton)`
  margin: 20px auto;
  width: 100%;
`;

export const Image = styled(GenericButton)`
  min-width: auto;
  width: auto;
`;

export const Avatar = styled.img`
  flex: 1;
  width: 60px;
  height: 50px;
  object-fit: cover;
  box-shadow: ${(props) =>
    props.active ? "1px 3px 11px 3px rgba(57, 72, 78, 0.66)" : ""};
  filter: grayscale(${(props) => (props.active ? "0" : "1")});
`;
