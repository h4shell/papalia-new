const year = document.querySelector("#year");
year.style.fontWeight = "normal";
const today = new Date();
year.innerText = today.getFullYear();
