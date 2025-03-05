const textElement = document.getElementById("typing-effect");
const texts = [
    "Please follow the instructions carefully as you proceed.",
    "Complete all the tasks carefully.",
    "Follow timer on top-right of the screen.",
    "Submit the task before the timer expires.",
    "Keep your phone on silent mode and avoid using it.",
    "Adjust your chair before baseline recording."
];

let textIndex = 0;
let charIndex = 0;
let currentLine = document.createElement("p"); // Create a new paragraph for each text

function type() {
    if (charIndex === 0) {
        currentLine = document.createElement("p"); // Create a new line for the next text
        textElement.appendChild(currentLine); // Append to the container
    }

    currentLine.textContent = texts[textIndex].slice(0, charIndex++);

    if (charIndex <= texts[textIndex].length) {
        setTimeout(type, 200); // Continue typing
    } else {
        charIndex = 0; // Reset character index for the next line
        textIndex++;
        if (textIndex < texts.length) {
            setTimeout(type, 1000); // Pause before starting a new line
        }
    }
}

type();
