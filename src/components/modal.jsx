import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { CUSTOM_STYLES } from '../utils/modal.config';
import { useHistory } from "react-router-dom";

import spyduck from '../images/spyduck.gif';

Modal.setAppElement('#root');

export function ModalCommon () {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let history = useHistory();

  useEffect(() => {
    window.addEventListener('openModal', () => {
      setIsOpen(true);
    })
  }, [])

  function closeModal () {
    setIsOpen(false);
  }

  function toLogin () {
    history.push('/login')
    closeModal()
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={CUSTOM_STYLES}
        contentLabel="Example Modal"
      >
        <img src={spyduck} alt="spydick"/>
        <button
          className="btn btn-warning"
          onClick={toLogin}
        >Login</button>
      </Modal>
    </div>
  )
}
