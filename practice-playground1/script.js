// async function fetchData() {

//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
//   const data = await response.json();

  
//   console.log(data);
// }

// fetchData();


// Without await - what do you think this will log?
async function testWithoutAwait(postId) {
  const response = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  console.log('Without await:', response);
}
testWithoutAwait();

// With await - what about this one?
async function testWithAwait(postId) {
  try{
  console.log("function called!");
  const loader = document.getElementById("loader");
  
  loader.style.display = "block";


  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  loader.style.display = "none";

  if (!data.title || !data.body) {
    throw new Error(`Post ${postId} not found`);
    
  }

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
    const loader = document.getElementById("loader");
    const result = document.getElementById("result");

    loader.style.display = "none";
    result.innerHTML = `<p style="color: red; font-weight: bold;">Error: ${error.message}</p>`;


    console.error("Error occurred: ", error);
  }
}

const fetchBtn = document.getElementById("fetchBtn");
const fetchBtn2 = document.getElementById("fetchBtn2");



fetchBtn.addEventListener("click", () => testWithAwait(1));
fetchBtn2.addEventListener("click", () => testWithAwait(29999));
