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

// TASK 2:

const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the actor's actual pay
