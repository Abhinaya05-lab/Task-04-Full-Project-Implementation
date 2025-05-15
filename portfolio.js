document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from submitting normally

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      alert("Thank you for reaching out, " + name + "! We'll get back to you soon.");
      form.reset(); // Optional: clear the form after submission
    }
  });
});