const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
}
const getName = obj.getName.bind(obj);
console.log(getName());

class IndecisionApp extends React.Component {
  render() {
    const title = 'IndecisionApp about';
    const subTitle = 'Put your life in a hand of a computer';
    const options = [1,2,3,4,5,6]
    return (
      <div>
        <Header aboutTitle={title} subTitle={subTitle} />
        <Action  />
        <Options option={options}/>
        <AddOption option={options} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
    <div>
      <h3>{this.props.aboutTitle}</h3>
      <h5>{this.props.subTitle}</h5>
    </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    console.log('works');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick} className="btn waves-effect waves-light">What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    console.log('New message!')
    console.log(this.props.option);
  }
  render() {
    return (
      <div>
        <p>Options component here:</p>
        {
          this.props.option.map((option) => <Option key={option} optionId={option}/>)
        }
        <button onClick={this.removeAll.bind(this)} className="btn waves-effect waves-light">Remove All</button>
      </div>
    );
  }
}

// New component rendered in Options
class Option extends React.Component {
  render() {
    return (
      <div>
        Options to choose: {this.props.optionId}
      </div>
    );
  }
}

class AddOption extends React.Component {
  onClickData(e) {
    e.preventDefault();
    const getVal = e.target.elements.option.value.trim();
    if (!!getVal) {
      console.log(`it's true`);
      console.log(getVal);
      this.props.option.push(Number(getVal));
      console.log(this.props.option);
    }
  }
  render() {
    return (
      <div>
        <p> Add Your favourite options:</p>
        <form onSubmit={this.onClickData.bind(this)}>
        <input type="text" name="option" />
        <button className="btn waves-effect waves-light">Submit</button>
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
