import styled from 'styled-components'

export const MainContainer = styled.div`
  margin-bottom: ${({ isBigMarginBottom }) => (isBigMarginBottom ? '54px' : '32px')};
`;

export const Container = styled.div`
  margin: 4rem auto;
  padding: 0 16px;
  max-width: 960px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-gap: 8px;

  margin: ${({ isMarginVertical }) => (isMarginVertical ? '54px 0' : '0')};
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Entry = styled.div`
  box-shadow: 0 1px 6px 2px #121e4117;
  border-radius: 4px;
  
  &.empty-entry {
    box-shadow: none;
  }
`;

export const SingleEntry = styled.div` 
    display: flex;
    grid-gap: 16px;
    padding: 16px;
    background-color: #f7f7f7;
    flex-wrap: wrap;

    &:first-child {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
    }
    
    &:last-child {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    ${({ theme }) => theme.mq.tablet} {
        flex-wrap: nowrap;
    }
`;

