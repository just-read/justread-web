import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplicationState } from 'redux/configureStore';

const CardContainer = styled.div`
  display: flex;
  flex: none;
  width: 60%;
`;

const List: React.FC = () => {
  return <CardContainer></CardContainer>;
};

export default List;
