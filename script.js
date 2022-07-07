const corpo = document.querySelector("body");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    corpo.classList.add("scroll");
  } else {
    corpo.classList.remove("scroll");
  }
});
