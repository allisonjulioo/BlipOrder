import styled from "styled-components";
import { primary, white } from "./../../colors";
import { height, radius, shadows } from "./../../constants";

const button = `
background: ${primary};
height: ${height}px;
border-radius: ${radius}px;
min-width: 182px;
font-size: 16px;
&:hover {
  -webkit-filter: brightness(0.94);
  filter: brightness(0.94);
}
&:active {
  -webkit-filter: brightness(0.8);
  filter: brightness(0.8);
}
`;
const fab = `
background: ${primary};
height: 60px;
border-radius: 50%;
width: 60px;
font-size: 36px;
line-height: 0;
position: fixed;
bottom: 40px;
right: 40px;
box-shadow: ${shadows};
&:hover {
  -webkit-filter: brightness(0.94);
  filter: brightness(0.94);
}
&:active {
  -webkit-filter: brightness(0.8);
  filter: brightness(0.8);
  transform: scale(.9);
}
`;
const icon = `
background: transparent;
height:auto;
border-radius: ${radius}px;
min-width:auto;
font-size: 16px;
&:hover {
  -webkit-filter: brightness(0.94);
  filter: brightness(0.94);
}
&:active {
  transform: scale(.95);
}
`;
export const GenericButton = styled.button`
  margin: 4px;
  ${(props) => {
    switch (props.type) {
      case "button":
        return button;
      case "fab":
        return fab;
      case "icon":
        return icon;
      default:
        return button;
    }
  }}
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  color: ${white};
`;
