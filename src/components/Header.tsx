import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Avatar } from 'antd';
import styled from 'styled-components';
import Logo from 'assets/justread-logo.png';
import { ApplicationState } from 'redux/configureStore';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 72px;
  background-color: #ffffff;
  border-bottom: 1px solid #e1e1e1;
  padding: 15px;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex: 0;
  align-items: center;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
export const FuntionContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoImage = styled.img`
  height: 40px;
  float: left;
`;
export const FunctionButton = styled(Button)`
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
