// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const feedback = document.getElementById("form-feedback");

        if (name === "" || email === "" || message === "") {

            feedback.textContent = "Please fill in all fields.";

        } else {

            feedback.textContent = "Thank you! Your message has been validated.";

            contactForm.reset();

        }

    });

}