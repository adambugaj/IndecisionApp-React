let name1 = 'Adam Bugaj';
let name2 = 'Adam Bugaj';
function getPetName() {
  const name = 'pet';
  return name;
}

const name = getPetName();
console.log(name);


const changeName = (name) => {
if (name) {
  name1 = name1.split(' ');
  return name1;
}
}

const splitName = (name) => name.split(' ')[0];

const square = (x) => x * x;
const quarter = (y) => y + y *10;

console.log(square(9), quarter(10), changeName(name1), splitName(name2));
