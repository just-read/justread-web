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
const Card: React.FC = () => {
  return <CardContainer></CardContainer>;
};

export default Card;
