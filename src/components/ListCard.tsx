import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplicationState } from 'redux/configureStore';

export const ListCardContainer = styled.div`
  flex: none;
  width: 60%;
`;

const ListCard: React.FC = () => {
  return <ListCardContainer>List</ListCardContainer>;
};

export default ListCard;
