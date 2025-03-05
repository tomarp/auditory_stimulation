const textElement = document.getElementById("typing-effect");
const texts = [
    "Please follow the instructions carefully as you proceed.",
    "Complete all the tasks carefully.",
    "Follow TIMER on top-right of the screen and complete the tasks before timer expires.",
    "Put your phone on Silent and avoid using it during the experiment.",
    "Adjust your chair before starting the experiment."
];

let textIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    textElement.textContent = isDeleting
        ? currentText.slice(0, charIndex--)
        : currentText.slice(0, charIndex++);

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, isDeleting ? 50 : 200);
    }
}

type();
