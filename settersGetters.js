// TASK 1:
const aCar = {};
aCar.color = 'black';
console.log(aCar);

function Car() {
  let theColor;
  Object.defineProperty(this, "color", {
    get: function() {
      console.log(theColor);
      return theColor;
    },
    set: function(value) {
      let checkColor = String(value);
      if (checkColor.length === 0) {
        throw new Error('Color name cannot be a zero');
      }

      theColor = value;
      console.log(value);
    }

  });
}

let aBetterCar = new Car();
aBetterCar.color = 'red';
console.log(aBetterCar.color);

// TASK 2:

class GetThings {
  constructor(size) {
    this.length = size;
  }
  get length1() {
    return this.length;
  }
  set length1(value) {
    this.length = value;
    console.log("The value has been set");
  }
}

let thing = new GetThings(10);
console.log(thing.length1);
thing.length1 = 10;

// TASK 3:

let cat = {
  name: {first:'Fluffy', last: 'LaBeouf'},
  color: 'White'
}

Object.defineProperty(cat, 'setName', {
  get() {
    return `${this.name.first} ${this.name.last}`
  },
  set(name) {
    let splitName = name.split(' ');
    this.name.first = splitName[0];
    this.name.last = splitName[1];
    return name;
  }
  // Undefined:
  //get: () => `${this.name.first} ${this.name.last}`
})
cat.setName = 'Cat Catty';
console.log(cat.setName);
