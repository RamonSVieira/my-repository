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

// page scroll animation

window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  activeMenuAtCurrentSection(home);
  activeMenuAtCurrentSection(about);
  activeMenuAtCurrentSection(projects);
  activeMenuAtCurrentSection(skills);
  activeMenuAtCurrentSection(footer);
}

function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2.5;

  const sectionTop = section.offsetTop;

  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}
