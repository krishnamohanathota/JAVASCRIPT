function a(callback) {
  setTimeout(() => {
    console.log("a : function body");
    callback();
  }, 2000);
}

function b(callback) {
  setTimeout(() => {
    console.log("b : function body");
    callback();
  }, 2000);
}

function c(callback) {
  setTimeout(() => {
    console.log("c : function body");
    callback();
  }, 2000);
}

a(() => {
  console.log("a() is done");

  b(() => {
    console.log("b() is done");

    c(() => {
      console.log("c() is done");
    });
  });
});
