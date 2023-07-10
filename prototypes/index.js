let Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(`Speed of ${this.make} is ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Speed of ${this.make} is ${this.speed}`);
};

let bmw = new Car("BMW", 120);
let mercedes = new Car("Mercedes", 95);

bmw.accelarate();
bmw.accelarate();

mercedes.accelarate();
mercedes.accelarate();

console.log("Applying break....");

bmw.brake();
bmw.brake();

mercedes.brake();
mercedes.brake();
