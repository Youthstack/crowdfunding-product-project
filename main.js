let body = document.querySelector("body");
let check = document.getElementById("check");
let backdrop = document.getElementById("backdrop");

function stopScroll() {
  body.classList.toggle("stop-scroll");
}

check.addEventListener("click", stopScroll);
