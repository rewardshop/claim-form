const scriptURL = "https://script.google.com/macros/s/AKfycbxkAUEEyMZYa214IgVEdT00xy7bKXyDiZBdgYZ60CmHlacI0QkgfdGtphZGQul6f900/exec";

const form = document.getElementById("userForm");
const loading = document.getElementById("loading");
const success = document.getElementById("success");

form.addEventListener("submit", e => {

e.preventDefault();

loading.style.display="block";
success.style.display="none";

fetch(scriptURL, {
method: "POST",
body: new FormData(form)
})
.then(response => {

loading.style.display="none";
success.style.display="block";

form.reset();

})
.catch(error => console.error("Error!", error.message))

});