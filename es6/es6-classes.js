console.log('working')

class Person {
  constructor(name = 'Unknown', location = 'not specified', age = 'type your age') {
    this.name = name;
    this.location = location;
    this.age = age;
  }
   getLocation() {
     return `Current location cannot be specified! Last location was ${this.location} your age is ${this.age} ${this.name}.`;
   }
}

class Student extends Person {
  constructor(name, location, age, major) {
    super(name, location, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getLocation() {
    let location = super.getLocation();

    if (this.hasMajor()) {
      location += ` Major is ${this.major}`;
    }
    return location;
  }
}

class Traveler extends Person {
  constructor(name, location, age, homelocation = 'the city that was not provided') {
    super(name, location, age);
    this.homelocation = homelocation;
  }
  hasHomeLocation() {
    return !!this.homelocation;
  }
  getLocation() {
    let location = super.getLocation();
    if (this.hasHomeLocation()) {
      location += `Hi! I am ${this.name}. I'm visiting from ${this.homelocation}`;
      return location;
    } else {
      return location;
    }
  }
}

const newPerson = new Person();
const newStudent = new Student('Peter','NYC', 26, 'Student');
console.log(newPerson.getLocation());
console.log(`Student:`, newStudent.getLocation());
const newTraveler = new Traveler(undefined, 'Cracow', 23)
console.log(newTraveler.getLocation());
