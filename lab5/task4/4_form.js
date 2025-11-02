const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    // Name
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const nameRegex = /^[A-Za-zА-Яа-яЇїЄєІіҐґ\s-]{2,30}$/;
    if (!nameRegex.test(name.value)) {
        valid = false;
        name.classList.add("invalid");
        nameError.textContent = "Name: 2-30 letters, spaces or hyphens allowed.";
    }

    // Age
    const age = document.getElementById("age");
    const ageError = document.getElementById("ageError");
    if (!(age.value >= 18 && age.value <= 130)) {
        valid = false;
        age.classList.add("invalid");
        ageError.textContent = "Age: number between 18 and 130.";
    }

    // E-Mail
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        valid = false;
        email.classList.add("invalid");
        emailError.textContent = "E-Mail: invalid format.";
    }

    // Website
    const website = document.getElementById("website");
    const websiteError = document.getElementById("websiteError");
    if (website.value !== "") {
        try {
            new URL(website.value);
        } catch {
            valid = false;
            website.classList.add("invalid");
            websiteError.textContent = "Website: invalid URL.";
        }
    }

    // Message
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (!(message.value.length >= 10 && message.value.length <= 350)) {
        valid = false;
        message.classList.add("invalid");
        messageError.textContent = "Message: 10-350 characters required.";
    }

    if (valid) {
        form.submit();
    }
});

// remove red border on focus
const fields = [ "name", "age", "email", "website", "message" ];
fields.forEach(id => {
    const field = document.getElementById(id);
    const errorDiv = document.getElementById(id + "Error");

    field.addEventListener("focus", () => {
        field.classList.remove("invalid");
        errorDiv.textContent = "";
    });
});
