import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

interface ReactModalAdapterProps extends ReactModal.Props {
  className?: string;
  modalClassName?: string | ReactModal.Classes;
}

const ReactModalAdapter: React.FC<ReactModalAdapterProps> = ({ className, modalClassName, ...props }) => (
  <ReactModal className={modalClassName} portalClassName={className} bodyOpenClassName="portalOpen" {...props} />
);

const StyledReactModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'Overlay',
  modalClassName: 'Modal',
})`
  & .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.45);
    transition: opacity 300ms ease-in-out;
  }

  & .Modal {
    position: relative;
    width: 520px;
    top: 120px;
    margin: 0 auto;
  }

  & [class*='--after-open'] {
    opacity: 1;
  }

  & [class*='--before-close'] {
    opacity: 0;
  }
`;

const RealModal = styled.div`
  position: relative;
  background-color: #ffffff;
  border: 0;
  border-radius: 8px;
  padding: 32px;
`;

const ModalContent = styled.div`
  display: inline-block;
  width: 100%;
`;

export interface ModalProps extends ReactModalAdapterProps {
  isOpen: boolean;
  onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => (
  <StyledReactModal isOpen={isOpen} onRequestClose={onRequestClose} closeTimeoutMS={300}>
    <RealModal>
      <ModalContent>{children}</ModalContent>
    </RealModal>
  </StyledReactModal>
);

export default Modal;
