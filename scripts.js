// scripts.js

// Function to toggle the class of the HTML element
function toggleTheme() {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.toggle("light");
  
    // Get the image element by its ID
    const profileImage = document.querySelector("#profile img");
  
    // Check the theme class and change the image source accordingly
    if (htmlElement.classList.contains("light")) {
      profileImage.src = "./assets/AvatarLight.png";
    } else {
      profileImage.src = "./assets/Avatar.png";
    }
  }
  
  // Add a click event listener to the button with id "toggleButton"
  const toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", toggleTheme);
  