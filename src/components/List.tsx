import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ApplicationState } from 'redux/configureStore';

const ListContainer = styled.div`
  flex: none;
  width: 60%;
`;
const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #e1e1e1;
`;
const CardTab = styled.div`
  flex: auto;
  border-left: 1px solid #e1e1e1;
`;

const List: React.FC = () => {
  return (
    <ListContainer>
      <TabContainer>
        <CardTab></CardTab>
        <CardTab></CardTab>
        <CardTab></CardTab>
        <CardTab></CardTab>
      </TabContainer>
    </ListContainer>
  );
};

export default List;
