let handler = {
  get: function(target, name) {
    if (name in target) {
      return target[name];
    } else {
      return 'Error!';
    }
  }
}

let p = new Proxy({}, handler);

p.foo = 'bar';
p.bar = 'foo';
console.log(p.foo, p.bar);

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
aBetterCar.color = '';

console.log(aBetterCar.color);
