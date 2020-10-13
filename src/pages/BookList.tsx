import React from 'react';
import styled from 'styled-components';
import List from 'components/List';
import Card from 'components/Card';
import { ApplicationState } from 'redux/configureStore';

export const BookListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
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
