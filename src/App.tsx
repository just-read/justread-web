import React, { useState, useCallback } from 'react';
import LoginModal from 'components/Modals/LoginModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = useCallback(() => setModalVisible(true), []);

  const closeModal = useCallback(() => setModalVisible(false), []);

  return (
    <div className="App">
      Login!
      <button onClick={openModal}>모달 열기</button>
      <LoginModal isOpen={modalVisible} onRequestClose={closeModal} />
    </div>
  );
};

export default App;
