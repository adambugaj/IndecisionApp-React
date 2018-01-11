import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  console.log(props.selectedOption);
  return (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleCloseSelectedOption}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick = {props.handleCloseSelectedOption} className="button">OK</button>
    </Modal>
  )
};

export default OptionModal;
