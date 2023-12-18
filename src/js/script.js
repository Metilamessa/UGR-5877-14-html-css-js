// const header = document.querySelector("header");

// window.addEventListener("scroll", function () {
//   header.classList.toggle("sticky", window.scroll > 120);
// });

// let menu = document.querySelector("#dropdown");
// let content = document.querySelector("#dropdown-content");

// menu.onclick = () => {
//   menu.classList.toggle("bx_x");
//   dropdown - content.classList.toggle("active");
// };

// window.onscroll = () => {
//   menu.classList.remove("bx_x");
//   dropdown - content.classList.remove("active");
// };

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Responsive navigation
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });

  // Form validation and confirmation
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple email validation
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();

    if (!validateEmail(emailValue)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Display confirmation message
    alert("Form submitted successfully!");
    form.reset();
  });

  // Function to validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
