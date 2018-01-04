class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

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
}

componentDidUpdate(prevProps, prevState) {
  // Check if previous state is not the same as current state and save new element
  if (prevState.options.length !== this.state.options.length) {
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json);

  }
}

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  randomNumber() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[randomNum]);
  }

// Remove one exact element from the list
handleDeleteOption(optionToRemove) {
  console.log('Element: ', optionToRemove);
  this.setState((prevState) => ({
    options: prevState.options.filter((option) => optionToRemove !== option)
  }));

}
  handleAddOption(getVal) {
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
  }
  render() {
    const title = 'IndecisionApp about';
    const subTitle = 'Put your life in a hand of a computer';
    return (
      <div>
        <Header aboutTitle={title} subTitle={subTitle} />
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
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h3>{props.aboutTitle}</h3>
      {props.aboutTitle && <h5>{props.subTitle}</h5>}
    </div>
  );
}

Header.defaultProps = {
  aboutTitle: 'Some Title'
};
// class Header extends React.Component {
//   render() {
//     return (
//     <div>
//       <h3>{this.props.aboutTitle}</h3>
//       <h5>{this.props.subTitle}</h5>
//     </div>
//     );
//   }
// }

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
// Changed to stateless functional component
// class Action extends React.Component {
//
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.randomNumber}
//           className="btn waves-effect waves-light"
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

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
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>Options component here:</p>
//         {
//           this.props.option.map((option) => <Option key={option} optionId={option}/>)
//         }
//         {
//           this.props.option.length > 0 ?
//           <button onClick={this.props.handleDeleteOptions} className="btn waves-effect waves-light">Remove All</button> : ''
//       }
//       </div>
//     );
//   }
// }

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
// New component rendered in Options
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         Options to choose: {this.props.optionId}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
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

// previous to render, but not used anymore
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
)

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
