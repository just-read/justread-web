import styled from 'styled-components';

const Input = styled.input`
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 4px 11px;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;

  :focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  ::placeholder {
    color: #bfbfbf;
  }
`;

export default Input;
