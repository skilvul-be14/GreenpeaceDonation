let BASEURL = "https://6351c96cdfe45bbd55c90ff4.mockapi.io/";

const emailElement = document.querySelector("#input_email_value");
const passwordElement = document.querySelector("#input_password_value");

let login = async (email, password) => {
  let response = await fetch(BASEURL + "users", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let data = await response.json();
  const user = await data.find((d) => d.email === email);

  if (user) {
    if (user.password === password) {
      localStorage.setItem("username", user.name);
      localStorage.setItem("user_id", user.id);
      alert("login success");
      window.location.href = "home.html";
    } else {
      alert("wrong password");
    }
  } else {
    alert("User Not found");
  }
};

document.getElementById("button_login").addEventListener("click", (event) => {
  event.preventDefault();

  const email = emailElement.value;
  const password = passwordElement.value;

  login(email, password);
});
