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


const user = {
  name: "Adam",
  cities: ['Cracow', 'Frankfurt', 'Zurich', 'NYC'],
  citiesLived() {
    return this.cities.map((index) => `${this.name} said that ${index} is the best city in the world!`);

    // this.cities.forEach((city) => {
    //   console.log(city + this.name);
    // });
  }
};
console.log(user.citiesLived());

const multiplier = {
  numbers: [1,2,3,4,5,6,7,8,9,10],
  multiplyBy: 3,
  multiply(userNumber) {
    return this.numbers.map((number) => number * userNumber);
  }
}
multiplier.numbers = [13,12,11,10];
console.log(multiplier.multiply(5));
