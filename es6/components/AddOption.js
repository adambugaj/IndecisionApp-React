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
  };

  render() {
    return (
      <div>
        {
          this.state.error && <p className="add-option-error">{this.state.error}</p>
        }
        <form className="add-option" onSubmit={this.onClickData}>
          <input className="add-option__input" type="text" name="option" placeholder="Add your favourite option here" />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}
