import { createGlobalStyle } from "styled-components";
import { black, blue } from "@/app/colors";
import { font } from "@/app/constants";

export const Global = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=${font}:wght@100;300;400;700&display=swap");
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
  font-family: ${font}, Arial, sans-serif;
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
