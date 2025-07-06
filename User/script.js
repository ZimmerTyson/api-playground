async function loadUsers() {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = response.json();
  
  if (!response) {

    throw new Error("There was an error fetching data");
    return;
  }

  const userList = document.getElementById("userList");
  const userName = data.name;
  const userEmail = data.email;
  const userCompany = data.company;

  userList.innerHTML = `
    <h3>Name: ${userName}</h3>
    <p>Email: ${userEmail}</p>
    <p>Company: ${userCompany}</p>
  `;

  
}

loadUsers();