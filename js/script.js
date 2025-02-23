// Get the element where the typing effect will be displayed
const typingText = document.getElementById("typing-text");

// Array of texts to be typed out in sequence
const texts = [
    "I am Utsab Roy",
    "I am a Full Stack Developer",
    "I am an Online Educator"
];

// Speed of typing in milliseconds (time between each character)
const typingSpeed = 100;

// Pause duration after typing completes, before deleting starts (in milliseconds)
const pauseDuration = 2000;

// Index to track the current text in the `texts` array
let textIndex = 0;

// Index to track the current character being typed or deleted
let charIndex = 0;

// Function to simulate typing text
function typeText() {
    // Check if there are more characters to type in the current text
    if (charIndex < texts[textIndex].length) {
        // Add the next character to the displayed text
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++; // Move to the next character
        setTimeout(typeText, typingSpeed); // Call `typeText` again after the typing speed delay
    } else {
        // If typing is complete, pause for `pauseDuration`, then start deleting
        setTimeout(deleteText, pauseDuration);
    }
}

// Function to simulate deleting text
function deleteText() {
    // Check if there are characters left to delete
    if (charIndex > 0) {
        // Remove the last character from the displayed text
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--; // Move to the previous character
        setTimeout(deleteText, typingSpeed / 2); // Call `deleteText` again with faster deletion speed
    } else {
        // If deletion is complete, move to the next text in the array
        textIndex = (textIndex + 1) % texts.length; // Loop back to the first text if at the end
        setTimeout(typeText, typingSpeed); // Start typing the next text
    }
}

// Start the typing animation by calling `typeText` for the first time
typeText();