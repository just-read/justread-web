import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplicationState } from 'redux/configureStore';

const CardContainer = styled.div`
  flex: 1;
  overflow: auto;
  border-left: 1px solid #e1e1e1;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
  color: #005897;
  background-color: #e6e6e6;
  border-bottom: 1px solid #e1e1e1;
  padding: 25px;
`;

const Card: React.FC = () => {
  return (
    <CardContainer>
      <TitleContainer>Book Information</TitleContainer>
    </CardContainer>
  );
};

export default Card;
