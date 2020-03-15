import React from 'react';
import { Layout, Button } from 'antd';
import styled from 'styled-components';
import Logo from 'assets/justread-logo.png';

const HeaderContainer = styled(Layout.Header)`
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
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={Logo} />
      </LogoContainer>
      <SearchContainer></SearchContainer>
      <FuntionContainer>
        <FunctionButton>로그인</FunctionButton>
        <FunctionButton type="primary">회원가입</FunctionButton>
      </FuntionContainer>
    </HeaderContainer>
  );
};

export default Header;
