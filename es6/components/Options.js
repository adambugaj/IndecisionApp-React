import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your options:</h3>
      {
        props.option.length > 0 ?
        <button
          onClick={props.handleDeleteOptions}
          className="button button--link"
          >
            Remove All
          </button> : ''
      }
      </div>
      {
        props.option.length === 0 ?
        <p className="widget__message">Please add an option to get started</p> :
        <p className="widget__message">Options component</p>
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

    </div>
  );
}
export default Options;
