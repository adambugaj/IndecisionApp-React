let sagas = [];
let hero = 'Gal';

const newSaga = function() {

  let foil = 'Cow';
  sagas.push(function() {
    let deed = 'Eyes';
    deed = 'Tips';

    console.log(hero + deed + foil);
  });
};
newSaga();
sagas[0]();
hero = 'Ano';
newSaga();
sagas[0]();
deed = 'Pins';
sagas[1]();

let fn = function(a,b) {
  console.log(this, a, b);
}
let r = {}
r.met = '3';
r.method = fn;
r.method(1,2);
