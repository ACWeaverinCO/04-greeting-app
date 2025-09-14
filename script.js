// Find the input field by its ID
let nameInput = document.getElementById("nameInput");

// Find the button element by its ID
let welcomeBtn = document.getElementById("welcomeBtn");

// Find the message placeholder element by its ID
let welcomeMsg = document.getElementById("welcomeMsg");

// Add a click event listener to the button
welcomeBtn.addEventListener("click", function() {
  // Get the value entered by the user
  let userName = nameInput.value;
  // If the input is not empty, show a fun personalized message
  if (userName) {
    welcomeMsg.textContent = "Hey " + userName + ", you rock! 🎉";
  } else {
    // If no name is entered, ask the user to enter their name
    welcomeMsg.textContent = "Please enter your name above.";
  }
  // Clear the input field after clicking the button
  nameInput.value = "";
});
