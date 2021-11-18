const form = document.getElementById("form");
const email = document.getElementById("email");

function showError() {
  document.querySelector(".error-msg").style.display = "block";
  email.classList.add("with-error");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.validity.valueMissing || !email.validity.valid) {
    showError();
  } else {
    this.submit();
  }
});
