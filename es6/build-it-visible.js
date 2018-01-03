class VisibleToggle extends React.Component {
  constructor(props) {
    super(props);
    this.visibileButton = this.visibileButton.bind(this);
    this.state = {
      buttonTittle: 'Click Me on',
      buttonOn: 'Click me off',
      showInfo: 'This is what you clicked for',
      buttonResult: false
    }
  }
  visibileButton() {
    console.log('works!');
    this.setState((prevState) => {
      console.log(!prevState.buttonResult);
      return {
        buttonResult: !prevState.buttonResult
      }
    })
  }
  render() {
    return (
      <div id="row">
        <button onClick={this.visibileButton} className="btn waves-effect waves-light">{this.state.buttonResult ? this.state.buttonOn : this.state.buttonTittle}</button>
        {
          this.state.buttonResult && <p>{this.state.showInfo}</p>
        }
      </div>
    );
  }
}
ReactDOM.render(<VisibleToggle />, document.getElementById('app'))




























// // check if js works
// console.log('It works!');
//
// // Object of our little app
// const appObject = {
//   title: 'Visibility App',
//   buttonTittle: 'Show details',
//   buttonOn: 'Hide details',
//   showInfo: 'Your button is working fine!'
// }
// let visibility = false;
//
// const showDetails = () => {
//   visibility = !visibility;
//   console.log('button is working');
//   renderApp();
// }
//
//
//
// const renderApp = () => {
// const toggleApp = (
//     <div id="row">
//       <h4>{appObject.title}</h4>
//       <button onClick={showDetails} className="btn waves-effect waves-light">{visibility ? appObject.buttonOn : appObject.buttonTittle}</button>
//       {
//         // visibility ? <p>{appObject.showInfo}</p> : ''
//         visibility && <p>{appObject.showInfo}</p>
//       }
//     </div>
//   )
//   ReactDOM.render(toggleApp, document.getElementById('app'));
// }
// renderApp();
