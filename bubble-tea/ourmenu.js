// Create a new image element
var img = document.createElement("img");

// Set attributes for the image
img.src = "path/to/your/image.jpg"; // Specify the path to your image
img.alt = "Description of the image"; // Provide alternative text for accessibility
img.width = 200; // Set the width of the image (optional)
img.height = 150; // Set the height of the image (optional)

// Find an existing element in your HTML to append the image to
var container = document.getElementById("image-container"); // Change "image-container" to the ID of the container element

// Append the image element to the container
container.appendChild(img);
