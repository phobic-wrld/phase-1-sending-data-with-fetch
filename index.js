// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    const newId = data.id;
    const newElement = document.createElement('p');
    newElement.textContent = `New ID: ${newId}`;
    document.body.appendChild(newElement);
  })
  .catch(error => console.error('Error:', error));

    // Handle successful response
  
  .catch(error => {
    const errorMessage = error.message;
    const errorElement = document.createElement('p');
    errorElement.textContent = errorMessage;
    document.body.appendChild(errorElement);
  });
