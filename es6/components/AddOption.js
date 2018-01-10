import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onClickData = this.onClickData.bind(this);
    this.state = {
      error: undefined
    };
  }
  onClickData(e) {
    e.preventDefault();
    const getVal = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(getVal);

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        <p> Add Your favourite options:</p>
        {
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.onClickData}>
        <input type="text" name="option" />
        <button
          className="btn waves-effect waves-light"
        >
          Submit
        </button>
        </form>
      </div>
    );
  }
}
