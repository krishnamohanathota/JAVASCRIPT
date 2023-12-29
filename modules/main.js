console.log("Dynamic Import Started");

async function test() {
  const module = await import("./aggregator.js");
  console.log(module.x);
  console.log(module.y);
  console.log(module.z);
  console.log(module.fun1(4, 3));
}

// Call the asynchronous function and wait for it to complete
test().then(() => {
  console.log("Dynamic Import & exeution is completed");
});
