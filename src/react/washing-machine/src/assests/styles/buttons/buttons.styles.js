import styled from 'styled-components'
import { lighten } from 'polished';

export const StyledButton = styled.button`
  margin-top: ${({ notMarginTop, theme }) => (notMarginTop ? 0 : '24px')};
  color: ${({ colorIsGray, theme }) => (colorIsGray ? theme.colors.darkGray : '#fff')};
  padding: 8px 24px;

  background-color: ${({ theme, background }) => {
    if (background === "green") return theme.colors.lightGreen;
    if (background === "gray") return theme.colors.lightGrey;
    if (background === "red") return '#e2425b';
    return theme.colors.buttonPurpleAction;
  }};

  border-radius: 4px;
  border: none;
  font-weight: 600;
  height: 48px;
  transition: background-color .4s;
  
  &:hover {
    background-color: ${({ theme, background }) => {
      if (background === "green") return lighten(0.1, theme.colors.lightGreen);
      if (background === "gray") return  '#e4ecf27d';
      if (background === "red") return lighten(0.1, '#e2425b');
      return lighten(0.1, theme.colors.buttonPurpleAction);
    }};  
  }
`;