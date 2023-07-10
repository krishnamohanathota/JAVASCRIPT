let Person = function (name, age) {
  this.name = name;
  this.age = age;
  console.log("Constructor Function");

  /*This is not a recommended way to add a function to a constructor function. 
  It will create a new copy of the function for each object. 
  Instead  we can add the function to the prototype of the constructor function. 
  This way the function will be shared by all the objects created using the constructor function.
  */
  this.notRecommended = function () {
    console.log(`Person name is ${this.name}. But this is not recommended`);
  };
};

// New {} is created and assigned to personObj
// "this" is set to personObj
// personObj is linked to Person.prototype
// Person is called with arguments passed to personObj
const personObj = new Person("KM", 40);

personObj.notRecommended();
console.log(personObj);
console.log(personObj instanceof Person);
