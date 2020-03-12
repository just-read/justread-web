import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #ffffff;
  padding: 4px 11px;
  font-size: 14px;
`;

const Input: React.FC = () => {
  return <StyledInput />;
};

export default Input;
