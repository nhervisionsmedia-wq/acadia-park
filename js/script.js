// updated contact form fix
$(document).ready(function () {
$(document).ready(function () {
    $(".hero-text").hide().fadeIn(2000);

    $(".menu-toggle").click(function () {
        $(".nav-menu").slideToggle();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const inquirytype = document.getElementById("inquirytype");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successMessage = document.getElementById("formSuccess");

    inquirytype.addEventListener("change", function () {
        if (this.value === "") {
            subject.value = "";
        } else {
            subject.value = this.value + " - Acadia Park Equipment Co.";
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        document.getElementById("fullnameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("messageError").textContent = "";
        successMessage.textContent = "";

        if (fullname.value.trim() === "") {
            document.getElementById("fullnameError").textContent = "Please enter your name";
            isValid = false;
        }

        if (email.value.trim() === "") {
            document.getElementById("emailError").textContent = "Please enter your email";
            isValid = false;
        } else if (!email.value.includes("@")) {
            document.getElementById("emailError").textContent = "Enter a valid email";
            isValid = false;
        }

        if (phone.value.trim() === "") {
            document.getElementById("phoneError").textContent = "Please enter your phone";
            isValid = false;
        }

        if (message.value.trim() === "") {
            document.getElementById("messageError").textContent = "Please enter a message";
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = "Form submitted successfully!";
            form.reset();
            subject.value = "";
        }
    });
});