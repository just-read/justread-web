import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProps } from 'components/basic/Modal';
import Input from 'components/basic/Input';
import Button from 'components/basic/Button';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface LoginModalProps extends ModalProps {}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <InputContainer>
        로그인 모달
        <Input />
        <Input />
        <Button>로그인</Button>
      </InputContainer>
    </Modal>
  );
};

export default LoginModal;
