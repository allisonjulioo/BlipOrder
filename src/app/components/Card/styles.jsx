import styled from "styled-components";
import { secondary, white } from "./../../colors";
import { shadows } from "./../../constants";

export const GenericCard = styled.div`
  height: 268px;
  width: 264px;
  font-size: 20px;
  border-radius: 8px;
  padding: 18px;
  margin: 34px;
  position: relative;
  background: ${white};
  box-shadow: ${shadows};
  color: ${secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 981px) {
    margin: 34px auto 0;
  }
`;
export const Logo = styled.img``;
