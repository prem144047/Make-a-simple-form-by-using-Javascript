<script>
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailMsg = document.getElementById("emailMsg");
    const passwordMsg = document.getElementById("passwordMsg");
    const form = document.getElementById("signupForm");

    // Email onChange validation
    emailInput.addEventListener("input", () => {
      const emailValue = emailInput.value.trim();
      if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
        emailMsg.textContent = "All good to go!";
    emailMsg.className = "success";
      } else {
        emailMsg.textContent = "Invalid email! Must contain '@' and '.' and be longer than 3 characters.";
    emailMsg.className = "error";
      }
    });

    // Password onChange validation
    passwordInput.addEventListener("input", () => {
      const passwordValue = passwordInput.value;
      if (passwordValue.length > 8) {
        passwordMsg.textContent = "All good to go!";
    passwordMsg.className = "success";
      } else {
        passwordMsg.textContent = "Password must be more than 8 characters.";
    passwordMsg.className = "error";
      }
    });

    // On form submit
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // prevent page refresh

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;

      // Final validation check
      const validEmail = emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".");
      const validPassword = passwordValue.length > 8;

    if (validEmail && validPassword) {
        const confirmSignup = confirm("Do you want to proceed with signup?");
    if (confirmSignup) {
        alert("Successful signup!");
        } else {
        // reset form if user cancels
        form.reset();
    emailMsg.textContent = "";
    passwordMsg.textContent = "";
        }
      } else {
        alert("Please fix the errors before submitting.");
      }
    });
</script>
