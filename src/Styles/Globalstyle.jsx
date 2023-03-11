import { createGlobalStyle } from "styled-components";
import { THEME } from "./Theme";

export const GlobalStyles = createGlobalStyle`

/* css reset */

*, 
*::before, 
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


  body {
  margin: 0;
  font-family: ${THEME.fonts.body};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${THEME.colors.secondary};
  position: relative;
}

code {
  font-family: ${THEME.fonts.body};
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}


body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}
h1, h2, h3, h4, h5, h6{
  margin: 0;
  padding: 0;
  color: ${THEME.colors.primary};
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
::selection{
  background-color: ${THEME.colors.primary};
  color: ${THEME.colors.light};
}
a{
  text-decoration: none;
  color: ${THEME.colors.primary};
}
.container{
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

}

`;
