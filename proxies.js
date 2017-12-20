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
