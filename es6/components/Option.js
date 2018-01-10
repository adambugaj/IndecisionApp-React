import React from 'react';

const Option = (props) => {
  return (
    <div>
      <p>Options to choose: {props.optionId}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionId)
          }}
          className="btn waves-effect waves-light">
          Remove
        </button>
      </p>
    </div>
  );
}

export default Option;
