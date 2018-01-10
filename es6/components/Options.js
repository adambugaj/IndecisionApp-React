import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      {
        props.option.length === 0 ? <p>Please add an option to get started</p> : <p>Options component that you have:</p>
      }
      {
        props.option.map((option) => (
        <Option
          key={option}
          optionId={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
      }
      {
        props.option.length > 0 ?
        <button onClick={props.handleDeleteOptions} className="btn waves-effect waves-light">Remove All</button> : ''
    }
    </div>
  );
}
export default Options;
