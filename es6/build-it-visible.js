// check if js works
console.log('It works!');

// Object of our little app
const appObject = {
  title: 'Visibility App',
  buttonTittle: 'Show details',
  buttonOn: 'Hide details',
  showInfo: 'Your button is working fine!'
}
let visibility = false;

const showDetails = () => {
  visibility = !visibility;
  console.log('button is working');
  renderApp();
}



const renderApp = () => {
const toggleApp = (
    <div id="row">
      <h4>{appObject.title}</h4>
      <button onClick={showDetails} className="btn waves-effect waves-light">{visibility ? appObject.buttonOn : appObject.buttonTittle}</button>
      {
        // visibility ? <p>{appObject.showInfo}</p> : ''
        visibility && <p>{appObject.showInfo}</p>
      }
    </div>
  )
  ReactDOM.render(toggleApp, document.getElementById('app'));
}
renderApp();
