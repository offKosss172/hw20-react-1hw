import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('');

  const openFirstModal = () => {
    setIsFirstModalOpen(true);
    setButtonBackgroundColor('red'); // Устанавливаем фоновый цвет для первой кнопки
  };

  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
    setButtonBackgroundColor(''); // Сбрасываем фоновый цвет
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
    setButtonBackgroundColor('green'); // Устанавливаем фоновый цвет для второй кнопки
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
    setButtonBackgroundColor(''); // Сбрасываем фоновый цвет
  };

  return (
    <div className="App">
      <Button
        text="Open first modal"
        backgroundColor={buttonBackgroundColor || 'red'}
        onClick={openFirstModal}
      />
      <Button
        text="Open second modal"
        backgroundColor={buttonBackgroundColor || 'green'}
        onClick={openSecondModal}
      />

<Modal
  header="Do you want to delete this file?"
  closeButton={true}
  text="Once you delete this file, it won't be possible to undo this action. Are you sure?"
  backgroundColor={buttonBackgroundColor} // Передаем фоновый цвет модальному окну
  actions={
    <>
      <button className="modal-button" onClick={closeFirstModal}>
        OK
      </button>
      <button className="modal-button" onClick={closeFirstModal}>
        Cancel
      </button>
    </>
  }
  isOpen={isFirstModalOpen}
  onClose={closeFirstModal}
/>

<Modal
  header="Do you want Create folder?"
  closeButton={true}
  text="This is the content of the second modal."
  backgroundColor={buttonBackgroundColor} // Передаем фоновый цвет модальному окну
  actions={
    <>
      <button className="modal-button" onClick={closeSecondModal}>
        OK
      </button>
      <button className="modal-button" onClick={closeSecondModal}>
        Cancel
      </button>
    </>
  }
  isOpen={isSecondModalOpen}
  onClose={closeSecondModal}
/>
    </div>
  );
}

export default App;
