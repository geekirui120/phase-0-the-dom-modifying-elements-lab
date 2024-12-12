// Remove the <main> element with id 'main'
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Assign the id 'victory' to the <h1> element
newHeader.id = 'victory';

// Set the text content of the <h1> element
newHeader.textContent = 'GABBY is the champion'; // Replace YOUR-NAME with your name

// Append the new <h1> element to the body
document.body.appendChild(newHeader);
// Write your code here!