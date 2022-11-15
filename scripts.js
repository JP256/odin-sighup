// VARIABLES
const form = document.getElementById("form");
const inputs = document.querySelectorAll(".input__field");
const btnCreateAccount = document.getElementById("btn__send");
const btnReset = document.getElementById("btn__reset");
const regExpress = {
  fname: /^[a-zA-Z]{3,15}$/,
  lname: /^[a-zA-Z]{3,15}$/,
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]+$/,
  phone: /^\d{3}-\d{3}-\d{4}$/,
  password: /^.{3,10}$/,
};
const fields = {
  fname: false,
  lname: false,
  email: false,
  phone: false,
  password: false,
  password2: false,
};

// FUNCTIONS
let confirmPassword = () => {
  let pass1 = document.getElementById("password");
  let pass2 = document.getElementById("password2");

  if (pass1.value === pass2.value) {
    document
      .querySelector(`.form__${pass2.name}`)
      .classList.add("input--correct");
    document
      .querySelector(`.form__${pass2.name}`)
      .classList.remove("input--incorrect");
    document
      .querySelector(`.form__${pass2.name} i`)
      .classList.add("fa-circle-check");
    document
      .querySelector(`.form__${pass2.name} i`)
      .classList.remove("fa-circle-xmark");
    fields.password2 = true;
  } else {
    document
      .querySelector(`.form__${pass2.name}`)
      .classList.remove("input--correct");
    document
      .querySelector(`.form__${pass2.name}`)
      .classList.add("input--incorrect");
    document
      .querySelector(`.form__${pass2.name} i`)
      .classList.remove("fa-circle-check");
    document
      .querySelector(`.form__${pass2.name} i`)
      .classList.add("fa-circle-xmark");
    fields.password2 = false;
  }
};
let validateFieldsHelper = (e) => {
  if (regExpress[e.target.name].test(e.target.value)) {
    document
      .querySelector(`.form__${e.target.name}`)
      .classList.add("input--correct");
    document
      .querySelector(`.form__${e.target.name}`)
      .classList.remove("input--incorrect");
    document
      .querySelector(`.form__${e.target.name} i`)
      .classList.add("fa-circle-check");
    document
      .querySelector(`.form__${e.target.name} i`)
      .classList.remove("fa-circle-xmark");
    fields[e.target.name] = true;
  } else {
    document
      .querySelector(`.form__${e.target.name}`)
      .classList.remove("input--correct");
    document
      .querySelector(`.form__${e.target.name}`)
      .classList.add("input--incorrect");
    document
      .querySelector(`.form__${e.target.name} i`)
      .classList.remove("fa-circle-check");
    document
      .querySelector(`.form__${e.target.name} i`)
      .classList.add("fa-circle-xmark");
    fields[e.target.name] = false;
  }
};
let validateFields = (e) => {
  switch (e.target.name) {
    case "fname":
      validateFieldsHelper(e);
      break;
    case "lname":
      validateFieldsHelper(e);
      break;
    case "email":
      validateFieldsHelper(e);
      break;
    case "phone":
      validateFieldsHelper(e);
      break;
    case "password":
      validateFieldsHelper(e);
      confirmPassword();
      break;
    case "password2":
      confirmPassword();
      break;
  }
};
// EVENTS
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
inputs.forEach((e) => {
  e.addEventListener("keyup", validateFields);
  e.addEventListener("blur", validateFields);
});

// CREATE BUTTOM
btnCreateAccount.addEventListener("click", () => {
  console.log(fields);
  if (
    fields.fname &&
    fields.lname &&
    fields.email &&
    fields.phone &&
    fields.password &&
    fields.password2
  ) {
    document.querySelector(".form_button-send p").style.opacity = "1";
    setTimeout(() => {
      // document.querySelector(".form_button-send p").style.opacity = "0";
      window.location.reload();
    }, 1500);
  } else {
    document.querySelector(".form__error-message").style.display = "block";
    setTimeout(() => {
      document.querySelector(".form__error-message").style.display = "none";
    }, 1500);
  }
});

// RESET BUTTOM
btnReset.addEventListener("click", () => {
  document.querySelector(".form_button-reset p").style.opacity = "1";

  setTimeout(() => {
    window.location.reload();
    document.querySelector(".form_button-reset p").style.opacity = "0";
  }, 700);
});
