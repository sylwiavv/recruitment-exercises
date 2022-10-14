import styled from 'styled-components';

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #7d838a;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 100%;
  
  .styled-input {
    display: flex;
    align-items: center;
    border: 1px solid #cbcbcb;
    border-radius: 4px;
    padding: 16px 8px;
    width: 100%;
    height: 48px;

    &:hover,
    &:focus,
    &.rw-open,
    &.react-datepicker-ignore-onclickoutside {
      border: 2px solid #298ffd;
      box-shadow: none;
      outline: none;
      transition: border, .3s;
    }
  }
`
