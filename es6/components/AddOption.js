import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  //does not need with new syntax plugin
//   constructor(props) {
//     super(props);
//     this.onClickData = this.onClickData.bind(this);
// }
  onClickData = (e) => {
    e.preventDefault();
    const getVal = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(getVal);

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = '';
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
