import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body{
  background: ${(props) => props.theme['cream']};
  color: ${(props) => props.theme['darkGrayishBlue']};
  -webkkit-font-smoothing: antialiased;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

 }
 body, button{
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1rem;
 }
 p{
  font-size: 0.875rem;
 }
 h1,h2,h3,h4{
  font-family: 'Fraunces' serif;
 }
 
 
 
 
 
 
 `
