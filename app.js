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

let count = 0;

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

const renderCounter = () => {
  const template = (
    <div id="row">
       <div className="col s12 m6">
         <div className="card blue-grey darken-1">
           <div className="card-content white-text">
             <span className="card-title">{templateObject.title}</span>
             <p>Author: {templateObject.author ? templateObject.author : 'Anonymous'}</p>
           </div>
         </div>
       </div>
       <ul className="collection with-header">
         <li className="collection-header"><h5>Contact Information</h5></li>
         <li className="collection-item"><div>{templateObject.contactInfo.numberPhone}<a href="#!" className="secondary-content"><i className="material-icons">Like</i></a></div></li>
         {(templateObject.age && templateObject.age > 18) && <li className="collection-item"><div>{templateObject.age}<a href="#!" className="secondary-content"><i className="material-icons">Like</i></a></div></li>}
         <li className="collection-item"><div>{templateObject.contactInfo.email}<a href="#!" className="secondary-content"><i className="material-icons">Like</i></a></div></li>
         {getLocation(templateObject.location)}
       </ul>
       <div className="col s12 m6">
         <div className="card yellow darken-1">
           <div className="card-content white-text">
             {app.title && <span className="card-title">{app.title}</span>}
             <p>{(app.options && app.options.length > 0) ? app.options : 'No options available'}</p>

           </div>
         </div>
       </div>

       <div className="card blue-grey darken-1">
         <div className="card-content white-text">
           {count != 0 && <span className="card-title">Count: {count}</span>}
         </div>
       </div>
       <button onClick={addNumber} className="btn waves-effect waves-light" type="submit" name="action">+
         </button>
       <button onClick={minusOne} className="btn waves-effect waves-light" type="submit" name="action">-
         </button>
         <button onClick={reset} className="btn waves-effect waves-light" type="submit" name="action">Reset
           </button>
     </div>
  );
  ReactDOM.render(template, appRoot);
}
renderCounter();
