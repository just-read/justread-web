import React from 'react';
import styled from 'styled-components';
import List from 'components/List';
import Card from 'components/Card';
import { ApplicationState } from 'redux/configureStore';

const BookListContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 70px;
`;

const BookList: React.FC = () => {
  return (
    <BookListContainer>
      <List></List>
      <Card></Card>
    </BookListContainer>
  );
};

export default BookList;
