class Counter extends React.Component {
  // Object
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  // Mehtods:
  // Increment the counter
  handleAddOne() {
    //this.state.count++;
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
    console.log(this.state)
  }
  // Decrement the counter
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  // Reset the counter
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    console.log('handleReset');
  }
  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleAddOne} className="btn waves-effect waves-light">+1</button>
        <button onClick={this.handleMinusOne} className="btn waves-effect waves-light">-1</button>
        <button onClick={this.handleReset} className="btn waves-effect waves-light">Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
