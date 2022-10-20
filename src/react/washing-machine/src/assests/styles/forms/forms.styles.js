import styled from 'styled-components';

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.fontColorLighter};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 100%;
  
  .styled-input {
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.borderColorLight};
    background-color: transparent;
    border-radius: 4px;
    padding: 16px 8px;
    width: 100%;
    height: 48px;

    &:hover,
    &:focus,
    &.rw-open,
    &.react-datepicker-ignore-onclickoutside {
      border: 2px solid #007bff;
      box-shadow: none;
      outline: none;
      transition: border, .3s;
    }
  }
`

export const ErrorWrapper = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin-top: 4px;
`
