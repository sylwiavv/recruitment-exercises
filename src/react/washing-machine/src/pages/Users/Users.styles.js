import styled from 'styled-components'

export const UsersWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 16px;
  margin-bottom: 54px;
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px 16px 16px 24px;
  width: 100%;
  
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => ( theme.colors.fontColorLighter )};
  font-size: 14px;
  padding: 0 32px;
  
  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.borderColorLight};
    padding-right: 32px;
    padding-left: 0;
  }
  
  &:last-of-type {
    margin-right: auto;
    border-left: 1px solid ${({ theme }) => theme.colors.borderColorLight};
    padding-left: 32px;
  }
  
  span {
    font-size: 16px;
    font-weight: 600;
  }
`;
