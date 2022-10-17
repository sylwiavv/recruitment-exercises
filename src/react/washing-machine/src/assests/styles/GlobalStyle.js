import './fonts.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body,
  a, button {
    font-family: 'Montserrat', sans-serif;  
  }
  
  body {
    background: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.fontColor};
  }
  
  //input,
  //.rw-widget-input{
  //  padding: 5px 8px;
  //  border: 1px solid gray;
  //  box-sizing: border-box;
  //  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  //  border-radius: 4px;
  //  &:focus {
  //    outline: none;
  //    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  //  }
  //}
`;
