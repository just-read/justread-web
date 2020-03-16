import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout, Button, Avatar } from 'antd';
import styled from 'styled-components';
import Logo from 'assets/justread-logo.png';
import { ApplicationState } from 'redux/configureStore';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 0;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const FuntionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 36px;
  float: left;
`;

const FunctionButton = styled(Button)`
  :first-of-type {
    margin-right: 8px;
  }
`;

const Header: React.FC = () => {
  const {
    user: {
      auth: { isLoggedIn },
    },
  } = useSelector((state: ApplicationState) => state);

  const loggedOutComponent = useMemo(
    () => (
      <>
        <FunctionButton>로그인</FunctionButton>
        <FunctionButton type="primary">회원가입</FunctionButton>
      </>
    ),
    []
  );

  const loggedInComponent = useMemo(
    () => (
      <>
        <Avatar size={48} />
      </>
    ),
    []
  );

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImage src={Logo} />
        </Link>
      </LogoContainer>
      <SearchContainer></SearchContainer>
      <FuntionContainer>{isLoggedIn ? loggedInComponent : loggedOutComponent}</FuntionContainer>
    </HeaderContainer>
  );
};

export default Header;
