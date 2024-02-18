const getRating = (postStr) => {
  // Make the POST request
  fetch('http://127.0.0.1:8000/analyze',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Specify that the request body is in JSON format
    },
    body: JSON.stringify({ text: postStr })
    })
    .then((response) => {
      // Check if the response status code indicates success (e.g., 200 OK)
      if (response.ok) {
          return response.json(); // Parse the response as JSON
      } else {
          throw new Error('Request failed');
      }
    })
  .then((data) => {
    /* THIS IS WHERE YOU RENDER THE RESPONSE DATA */
    const responseDataString = JSON.stringify(data);
    alert(responseDataString);
  })
  .catch((error) => {
    // Log any errors
    alert('Error: ' + error);
  });
}

export default getRating;