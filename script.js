const corpo = document.querySelector("body");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    corpo.classList.add("scroll");
  } else {
    corpo.classList.remove("scroll");
  }
});

const contentSkills = document.querySelectorAll(".content-skills ul li");
const iconsSkills = document.querySelectorAll(".list-skills ul li");

console.log(contentSkills);
console.log(iconsSkills);

iconsSkills.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    contentSkills.forEach((item) => {
      item.classList.remove("view");
    });

    contentSkills[index + 1].classList.add("view");
  });
});
