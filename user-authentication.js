let username = prompt("Enter your username");
let password = prompt("Enter your password");

let correctUsername = "admin";
let correctPassword = "123321";

if (!username || !password) {
  alert("Validation Error");
} else if (username === correctUsername && password === correctPassword) {
  alert(`Hello ${username}`);
} else if (username !== correctUsername) {
  alert("Incorrect username");
} else {
  alert("Incorrect password");
}
