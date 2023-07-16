async function fetchUserData(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!response.ok) throw new Error("Unable to retrieve the data");

  //const responseData = await response.json(); // Adding await here to resolve the Promise

  return await response.json(); // Adding await here to resolve the Promise
}

const userId = 3;

// IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    console.log("## Before fetchUserData");
    const response = await fetchUserData(userId);
    console.log(response);
    console.log("## After fetchUserData");
  } catch (error) {
    console.log("## Error Block");
    console.log(error);
  } finally {
    console.log("## Finally Block");
  }
})();
