// const url = "https://restcountries.com/v2/name/portugal";
console.log(1);

let signUp = document.getElementById("signUpBtn");
let signIn = document.getElementById("signInBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signIn.onclick = function () {
  //hide sign Up and show sign in
  nameField.style.maxHeight = 0;
  title.innerHTML = "Sign in";
  signIn.classList.remove("disabled");
  signUp.classList.add("disabled");
};

signUp.onclick = function () {
  //hide sign inand show sign up
  nameField.style.maxHeight = "65px";
  title.innerHTML = "Sign up";
  signIn.classList.add("disabled");
  signUp.classList.remove("disabled");
};
