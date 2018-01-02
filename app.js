console.log("App.js is running");

const templateObject = {
  title: 'Indecision Online App',
  author: 'Adam Bugaj',
  country: 'US',
  location: 'New York',
  age: 23,
  contactInfo: {
    numberPhone: 505400323,
    email: 'adampeter@gmail.com'
  }
};

const app = {
  title: 'Indecision best App',
  subtitle: 'Put in the work',
  options: ['one', 'two']
};

function getLocation(location) {
  if (location) {
    return <li className="collection-item"><div>{location}<a href="#!" className="secondary-content"><i className="material-icons">Like</i></a></div></li>;
  }
}

let count = app.options.length;

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
  </div>
);

const addNumber = () => {
  count++;
  renderCounter();
  console.log('addOne ' + count);
}
const minusOne = () => {
  count--;
  renderCounter();
  console.log('minusOne');
}
const reset = () => {
  count = 0;
  renderCounter();
  console.log('reset');
}

const appRoot = document.getElementById('app');
const onFormSubmit = (e) => {
  e.preventDefault();
  count++;
  console.log('Form submitted!')
  const getVal = e.target.elements.option.value;
  console.log('Form submitted! Your value is: ' + getVal);
  if(getVal) {
    app.options.push(getVal);
     e.target.elements.option.value = '';
  }
  newRenderApp();
};
const removeOne = () => {
  app.options.pop();
  count--;
  newRenderApp();
};

const removeAll = () => {
  app.options = [];
  count = 0;
  newRenderApp();
}
console.log(Math.random().toFixed(3));
const numbers = [20, 40, 60, 80];

const onMakeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  console.log(randNum, app.options.length);
};
onMakeDecision()
const newRenderApp = () => {
  const newFormApp = (
    <div id="row">
     <div className="col s12 m6">
       <div className="card grey darken-1">
         <div className="card-content white-text">
           {app.title && <span className="card-title">{app.title} {count}</span>}
           <p>{(app.options && app.options.length > 0) ? app.options : 'No options available'}</p>
           {

             app.options.map((option) => <p key={option + Math.random().toFixed(3)}>Options: {option}</p>
              )

           }
           <button onClick={removeOne} className="btn waves-effect waves-light">Remove</button>
           <button onClick={removeAll} className="btn waves-effect waves-light">Remove All</button>
           <button disabled={app.options.length === 0 && true} onClick={onMakeDecision} className="btn waves-effect waves-light">What should I do</button>
         </div>
       </div>
     </div>
    {/* form for app */}
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button className="btn waves-effect waves-light">Add</button>
    </form>
  </div>
  );
  ReactDOM.render(newFormApp, appRoot);
};
newRenderApp();

// const renderCounter = () => {
//   const template = (
//     <div id="row">
//        <div className="col s12 m6">
//          <div className="card blue-grey darken-1">
//            <div className="card-content white-text">
//              <span className="card-title">{templateObject.title}</span>
//              <p>Author: {templateObject.author ? templateObject.author : 'Anonymous'}</p>
//            </div>
//          </div>
//        </div>
//        <ul className="collection with-header">
//          <li className="collection-header"><h5>Contact Information</h5></li>
//          <li className="collection-item"><div>{templateObject.contactInfo.numberPhone}<a href="#!" className="secondary-content"><i className="material-icons">Like</i></a></div></li>
//          {(templateObject.age && templateObject.age > 18) && <li className="collection-item"><div>{templateObject.age}<a href="#!" className="secondary-content"><i className="material-icons">Like</i></a></div></li>}
//          <li className="collection-item"><div>{templateObject.contactInfo.email}<a href="#!" className="secondary-content"><i className="material-icons">Like</i></a></div></li>
//          {getLocation(templateObject.location)}
//        </ul>
//        <div className="col s12 m6">
//          <div className="card yellow darken-1">
//            <div className="card-content white-text">
//              {app.title && <span className="card-title">{app.title}</span>}
//              <p>{(app.options && app.options.length > 0) ? app.options : 'No options available'}</p>
//
//            </div>
//          </div>
//        </div>
//
//        <div className="card blue-grey darken-1">
//          <div className="card-content white-text">
//            {count != 0 && <span className="card-title">Count: {count}</span>}
//          </div>
//        </div>
//        <button onClick={addNumber} className="btn waves-effect waves-light" type="submit" name="action">+
//          </button>
//        <button onClick={minusOne} className="btn waves-effect waves-light" type="submit" name="action">-
//          </button>
//          <button onClick={reset} className="btn waves-effect waves-light" type="submit" name="action">Reset
//            </button>
//
//            {/* form for app */}
//            <form onSubmit={onFormSubmit}>
//              <input type="text" name="option" />
//              <button className="btn waves-effect waves-light">Add</button>
//            </form>
//
//
//      </div>
//   );
//   ReactDOM.render(template, appRoot);
// }
// renderCounter();
