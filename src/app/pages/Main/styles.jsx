import styled from "styled-components";
import { GenericButton } from "./../../components/Button/styles";
import { GenericCard } from "./../../components/Card/styles";
import { primary } from "./../../colors/";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
export const Content = styled.div`
  padding: 48px 20px;
`;

const ballInline = `
  width: 24px;
  height: 24px;
  margin: 0 12px 0 0;
`;
const ballBlock = `
  width: 80px;
  height: 80px;
  margin: 36px auto 20px;
`;

export const Ball = styled.div`
  ${(props) => (props.inline ? ballInline : ballBlock)};
  background: #55cfff;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BallImage = styled.img`
  object-fit: cover;
  width: 80px;
  height: 80px;
`;
export const Star = styled(GenericButton)`
  transition: all 0.6s ease 0.3s;
  position: absolute;
  z-index: +12;
  left: ${(props) => (props.inline ? "-44px" : "16px")};
  top: 16px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.inline ? "column" : "row")};
  justify-content: space-betweenflex;
  border-bottom: 1px solid #d4dfe5;
  padding: 16px 0;
  flex-wrap: wrap;
  &:last-child {
    border: none;
  }
`;
const inLine = `   
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0 12px 44px;
  width: calc(100% - 44px);
`;
export const CardBot = styled(GenericCard)`
  transition: all 0.1s linear;
  margin-right: 34px;
  margin-left: 0;
  ${(props) => (props.inline ? inLine : "")}
`;
export const InfoBot = styled.section`
  display: ${(props) => (props.inline ? "flex" : "block")};
`;

export const StarImage = styled.img``;
export const Title = styled.h4`
  cursor: pointer;
  text-transform: capitalize;
  text-align: center;
  &:hover {
    color: ${primary};
  }
`;
export const Description = styled.span`
  font-size: 14px;
  text-align: center;
`;
