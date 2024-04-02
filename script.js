const menu = document.querySelector(".menu");
const button = document.getElementById("demo");

const close = document.getElementById("close");

button.addEventListener("click", function () {
  menu.style.display = "flex";
});

close.addEventListener("click", function () {
  menu.style.display = "none";
});
