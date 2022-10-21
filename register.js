let BASE_URL = "https://6351c96cdfe45bbd55c90ff4.mockapi.io/";

let nama_element = document.querySelector("#input_name");
let email_element = document.querySelector("#input_email");
let password_element = document.querySelector("#input_password");
let password_confirm_element = document.querySelector("#confirm_password");

let button = document.getElementById("register_button");

let postDataElement = async () => {
  const name_value = nama_element.value;
  const email_value = email_element.value;
  const password_value = password_element.value;

  await fetch(BASE_URL + "users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name_value,
      email: email_value,
      password: password_value,
    }),
  });

  window.location.href = "login.html";
};

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (password_confirm_element.value == password_element.value) {
    postDataElement();

    alert("Register success");
  } else {
    alert("Wrong input Password. Please check again");
  }
});
