document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  // Helper to show errors
  function showError(field, message) {
    const error = document.getElementById(`error-${field}`);
    const input = document.getElementById(field);
    error.textContent = message;
    input.style.border = "1px solid #F89687";
    input.style.boxShadow =
      "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC";
    input.setAttribute("aria-invalid", "true");
  }

  // Helper to clear errors
  function clearError(field) {
    const error = document.getElementById(`error-${field}`);
    const input = document.getElementById(field);
    error.textContent = "";
    input.style.border = "1px solid #D0D5DD";
    input.style.boxShadow = "none";
    input.removeAttribute("aria-invalid");
  }

  // Validation logic for each field
  function validateField(field) {
    const value = form[field].value.trim();

    switch (field) {
      case "name":
        if (!value) return showError(field, "Full name is required");
        break;

      case "email":
        if (!value) return showError(field, "Email is required");
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value))
          return showError(field, "Enter a valid email (name@example.com)");
        break;

      case "subject":
        if (!value) return showError(field, "Subject is required");
        break;

      case "message":
        if (!value) return showError(field, "Message is required");
        if (value.length < 10)
          return showError(field, "Message must be at least 10 characters long");
        break;
    }

    // If valid, clear error
    clearError(field);
  }

  // Add real-time validation listeners
  ["name", "email", "subject", "message"].forEach((field) => {
    const input = form[field];
    input.addEventListener("input", () => validateField(field)); // while typing
    input.addEventListener("blur", () => validateField(field)); // on leaving field
  });

  // On submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    successMessage.style.display = "none";

    let isValid = true;

    ["name", "email", "subject", "message"].forEach((field) => {
      validateField(field);
      const errorText = document.getElementById(`error-${field}`).textContent;
      if (errorText) isValid = false;
    });

    if (isValid) {
      successMessage.style.display = "block";
      form.reset();
      form.name.focus(); // Return focus for accessibility
    }
  });
});
