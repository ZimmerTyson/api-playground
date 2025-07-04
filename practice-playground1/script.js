// async function fetchData() {

//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
//   const data = await response.json();

  
//   console.log(data);
// }

// fetchData();


// Without await - what do you think this will log?
async function testWithoutAwait() {
  const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log('Without await:', response);
}
testWithoutAwait();

// With await - what about this one?
async function testWithAwait() {
  try{
  console.log("function called!");
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  console.log("Data returned: ", data);

  const result = document.getElementById("result");
  console.log("result div found: ", result);

  if(!result) {
    console.log("ERROR: Could not find result div!");
    return;
  }

  const title = document.createElement("h2");
  title.innerHTML = data.title;

  const body = document.createElement("p");
  body.innerHTML = data.body;

  
  result.appendChild(title);
  result.appendChild(body);

  console.log("Elements should be added now");
  } catch (error) {
    console.error("Error occurred: ", error);
  }
}

const fetchBtn = document.getElementById("fetchBtn");
const fetchBtn2 = document.getElementById("fetchBtn2");
const fetchBtn3 = document.getElementById("fetchBtn3");


fetchBtn.addEventListener("click", testWithAwait);
fetchBtn2.addEventListener("click", testWithAwait);
fetchBtn3.addEventListener("click", testWithAwait);