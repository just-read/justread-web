import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplicationState } from 'redux/configureStore';

export const CardContainer = styled.div`
  flex: 1;
  overflow: auto;
  border-left: 1px solid #e1e1e1;
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 50px;
  color: #005897;
  background-color: #e6e6e6;
  border-bottom: 1px solid #e1e1e1;
`;

const Card: React.FC = () => {
  return (
    <CardContainer>
      <TitleContainer>
        <h2>Book Information</h2>
      </TitleContainer>
    </CardContainer>
  );
};

export default Card;
