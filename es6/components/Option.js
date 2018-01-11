import React from 'react';

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text ">{props.optionCount}. {props.optionId}</p>
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionId)
          }}
          className="button button--link">
          Remove
        </button>
    </div>
  );
}

export default Option;
