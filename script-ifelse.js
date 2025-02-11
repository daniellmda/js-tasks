let username = prompt("Enter your username");
let password = prompt("Enter your password");

let correctUsername = "admin";
let correctPassword = "123321";

if (username === correctUsername && password === correctPassword) {
  alert(`Hello ${username}`);
} else if (username !== correctUsername) {
  alert("Incorrect username");
} else if (password !== correctPassword) {
  alert("Incorrect password");
} else {
  alert("Validation error");
}
