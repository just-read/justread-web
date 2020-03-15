import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProps } from 'components/basic/Modal';
import Input from 'components/basic/Input';
import Button from 'components/basic/Button';
import { Title } from 'components/basic/Typography';

const LoginContainer = styled.div`
  flex-direction: column;
  display: inline-block;
  width: 100%;
`;

const Form = styled.form`
  display: inline-block;
  width: 100%;
  flex-direction: column;
`;

interface LoginModalProps extends ModalProps {}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <LoginContainer>
        <Title> Welcome!</Title>
        <Form>
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
          <Button>로그인</Button>
        </Form>
      </LoginContainer>
    </Modal>
  );
};

export default LoginModal;
