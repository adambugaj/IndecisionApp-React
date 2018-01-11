import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  // constructor(props) {
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.randomNumber = this.randomNumber.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  // }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  randomNumber = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(this.state.options[randomNum]);
    console.log(this.state.selectedOption);
    this.setState(() => ({
      selectedOption: option
    }));
  };


  handleCloseSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  // Remove one exact element from the list
  handleDeleteOption = (optionToRemove) => {
    console.log('Element: ', optionToRemove);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handleAddOption = (getVal) => {
    if (!getVal) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(Number(getVal)) > -1) {
      return 'This option already exists'
    }
    // Add new element to options object
    this.setState((prevState) => ({
      options: prevState.options.concat(Number(getVal))
    }));
    console.log(`State:`,this.state.options);
  };

  // Show new element from local storage
  componentDidMount() {
    console.log('fetching data');
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
      this.setState(() => ({options}))
      }
    } catch (e) {
      log('you have an error')
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // Check if previous state is not the same as current state and save new element
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);

    }
  };


  render() {
    const title = 'Indecision App';
    const subTitle = 'Put your life in a hand of a computer';
    return (
      <div>
        <Header aboutTitle={title} subTitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            randomNumber={this.randomNumber}
          />
          <Options
            option={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseSelectedOption={this.handleCloseSelectedOption}
        />
      </div>
    );
  }
};
Header.defaultProps = {
  aboutTitle: 'Some Title'
};
