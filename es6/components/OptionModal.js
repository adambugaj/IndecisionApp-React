import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal className="modal"
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleCloseSelectedOption}
      contentLabel="Selected Option"
      closeTimeoutMS={600}
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}
      <button onClick = {props.handleCloseSelectedOption} className="button">OK</button>
    </Modal>
  )
};

export default OptionModal;
