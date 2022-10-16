import styled from 'styled-components'

export const StyledButton = styled.button`
  margin: auto 0 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '8px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 4px;
  border: none;
  font-weight: bold;
  height: 48px;
`;