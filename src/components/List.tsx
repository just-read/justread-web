import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import IconCard from 'assets/icon-tab-card.png';
import IconList from 'assets/icon-tab-list.png';
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
  position: relative;
  border-left: 1px solid #e1e1e1;
`;
const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const List: React.FC = () => {
  return (
    <ListContainer>
      <TabContainer>
        <CardTab>
          <CardIcon src={IconCard} />
        </CardTab>
        <CardTab>
          <CardIcon src={IconList} />
        </CardTab>
        <CardTab></CardTab>
        <CardTab></CardTab>
      </TabContainer>
    </ListContainer>
  );
};

export default List;
