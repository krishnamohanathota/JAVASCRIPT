//Inheritance : Constructor Function (Practice)

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going with ${this.speed} km/hr`);
};

Car.prototype.break = function () {
  this.speed -= 10;
  console.log(`${this.make} is going with ${this.speed} km/hr`);
};

//const carObj = new Car("MyCar", 120);
//carObj.accelerate();

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

//PolyMorphism : Same method name but different implementation
EV.prototype.accelerate = function () {
  this.speed += 10;
  this.charge -= 1;
  console.log(
    `${this.make} is going with ${this.speed} km/hr, with a charge of ${this.charge}%`
  );
};

const evCar = new EV("Tyota", 120, 80);
evCar.accelerate();
evCar.chargeBattery(100);
evCar.accelerate();
evCar.break();

console.log(evCar);

console.log(evCar instanceof EV);
console.log(evCar instanceof Car);
console.log(evCar.constructor);
