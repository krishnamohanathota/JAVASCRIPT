class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; // km/hr
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at speed ${this.speed} km/hr`);
  }

  break() {
    this.speed -= 10;
    console.log(`${this.make} is going at speed ${this.speed} km/hr`);
  }

  //Return the speed in mi/hr (i.e. Convert from km/hr to mi/hr)
  get speedUS() {
    console.log("getter is called");
    return this.speed / 1.6;
  }

  //Convert Speed from mi/hr to km/hr
  set speedUS(speed) {
    console.log("setter is called");
    this.speed = speed * 1.6;
  }
}

//Speed in km/hr while creating the Object
const fordObj = new Car("Ford", 120);
console.log(fordObj);
console.log(`${fordObj.make} is going at speed ${fordObj.speedUS} mi/hr`);
fordObj.accelerate();
fordObj.accelerate();
fordObj.break();
fordObj.break();
fordObj.speedUS = 100;
console.log(`${fordObj.make} is going at speed ${fordObj.speedUS} mi/hr`);
