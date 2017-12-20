let i = 3
//TASK 1:
// Set timeout for correct ouput or an error
let myPromise = new Promise((resolve, reject) => {
  if(i == 3) {
  setTimeout(() => {
    resolve('Good to go');
}, 1000);
} else {
  setTimeout(() => {
    reject('bad function!');
  }, 1500);
}
})

// TASK 2:
// Show the output or show an error
myPromise.then((res) => document.querySelector('h1').innerHTML = res)
.catch((err) => document.querySelector('p').innerHTML = err);

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Very Good!');
  }, 3000)
});
// Init two different promises
Promise.all([myPromise, promise2]).then((data) => document.querySelector('h1').innerHTML = data).catch((err) => document.querySelector('p').innerHTML = err);

// TASK 3: fetch API
fetch('https://api.icndb.com/jokes/random/10')
  // Check what is inside
  .then((res) => {
    console.log(res)
    // Check the data jokes from JSON
    res.json().then((data) => {
      console.log(data);
    });
    // Check errors
  }).catch((err) => {
    console.log(err);
  });
