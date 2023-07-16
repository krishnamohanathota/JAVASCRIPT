function fetchUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => {
      if (!response.ok) throw new Error("Unable to retrieve the data");

      return response.json(); // This returns a Promise that resolves to the parsed JSON data
    }
  );
}

const userId = 12345;

fetchUserData(userId)
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.log(`Unable to Retrieve user data. ${error}`);
  })
  .finally(() => {
    console.log("Finally...");
  });

/*
This Statement is executed synchronously,
meaning it will be printed before the Promise is resolved and the .then() or .catch()
blocks are executed.
*/
console.log("## After fetchUserData");
