import styled from "styled-components";
import { GenericButton } from "./../../../../components/Button/styles";

export const GenericInput = styled.div`
  margin-bottom: 20px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 981px) {
    display: block;
  }
`;

export const Title = styled.h1`
  @media (max-width: 981px) {
    text-align: center;
  }
`;

export const Actions = styled.section`
  align-items: center;
  display: flex;
  @media (max-width: 981px) {
    display: block;
  }
`;

export const Icon = styled.img`
  opacity: ${(props) => (props.active ? "1" : "0.4")};
`;
export const ButtonSort = styled(GenericButton)`
  opacity: ${(props) => (props.active ? "1" : "0.6")};
  box-shadow: ${(props) =>
    props.active ? "-1px 2px 6px rgba(57,72,78,0.16)" : " "};
  @media (max-width: 981px) {
    width: 100%;
  }
`;
