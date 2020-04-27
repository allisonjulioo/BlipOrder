import { createGlobalStyle } from "styled-components";
import { black, blue } from "./../colors";

export const Global = createGlobalStyle`
body,
html {
  width: 100%;
  height: 100%;
}
body {
  background: #F3F7FA; 
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: "Open Sans", Arial, sans-serif;
}
a {
  text-decoration: none;
}
h1 {
  color: ${black}
}
h2 {
  color: ${blue}
}
#root {
  height: 100%;
}
ul {
  list-style: none;
} 
`;
