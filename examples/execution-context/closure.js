function outer() {
  var b = 10;
  var c = 100;
  function inner() {
    var a = 20;
    console.log("a= " + a + " b= " + b);
    a++;
    b++;
  }
  return inner;
}

var X = outer(); // outer() invoked the first time
var Y = outer(); // outer() invoked the second time
//end of outer() function executions

X(); // X() invoked the first time (Output : a= 20 b= 10)
X(); // X() invoked the second time (Output : a= 20 b= 11)

//end of X() function executions

Y(); // Y() invoked the first time (Output : a= 20 b= 10)
//end of Y() function executions
