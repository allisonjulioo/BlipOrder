import styled from "styled-components";
import { GenericCard } from "./../../components/Card/styles";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 20px;
`;
export const Content = styled.div`
  padding: 48px 20px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8f9fae;
  padding-bottom: 32px;
  @media (max-width: 981px) {
    display: block;
  }
`;
export const Infos = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  padding: 12px;
  background: ${(props) => (props.color ? props.color : "#dde6eb")};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  margin-right: 12px;
  object-fit: contain;
`;
export const Description = styled.section``;
export const Title = styled.h2`
  color: #576071;
  text-transform: capitalize;
  margin-bottom: ${(props) => props.margin}px;
`;
export const Id = styled.span`
  color: #8f9fae;
  font-size: 14px;
`;
export const Created = styled.span`
  color: #8f9fae;
  font-size: 16px;
`;
export const Span = styled.span`
  color: #516269;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const Body = styled.div``;
export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px 0 6px;
  @media (max-width: 981px) {
    display: block;
  }
`;
export const Col = styled.div`
  width: ${(props) => (props.col ? `${props.col * 10}%` : "100%")};
  text-align: ${(props) => props.align};
  margin: 0 20px 0 0;
  &:last-child {
    margin: 0;
  }
  @media (max-width: 981px) {
    width: 100%;
  }
`;

const start = ` 
  justify-content: flex-start;
  align-items: flex-start;
`;

const center = `
  justify-content: center;
  align-items: flex-start;
`;
export const Card = styled(GenericCard)`
  margin: 0;
  max-width: 100%;
  width: 100%;
  padding: 36px;
  ${(props) => (props.start ? start : center)};
`;
