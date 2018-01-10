import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.randomNumber}
        className="btn waves-effect waves-light"
      >
        What should I do?
      </button>
    </div>
  );
}

export default Action;
