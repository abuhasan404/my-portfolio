
/* AUTOMATIC YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* TYPING ANIMATION */

const words = [
    "Web Developer",
    "Vibe Coder",
    "AI Enthusiast",
    "Creative Learner"
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 110);
}

typeEffect();


/* SCROLL ANIMATION */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.animation =
                    "fadeUp 0.8s ease";
            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});
