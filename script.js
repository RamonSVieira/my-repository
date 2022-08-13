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

// verificando se é mobile ou desktop
window.addEventListener("scroll", () => {
  if (window.innerWidth > 700) {
    function onScroll() {
      activeMenuAtCurrentSectionDesktop(home);
      activeMenuAtCurrentSectionDesktop(about);
      activeMenuAtCurrentSectionDesktop(projects);
      activeMenuAtCurrentSectionDesktop(skills);
      activeMenuAtCurrentSectionDesktop(footer);
    }
    onScroll();
  } else {
    function onScroll() {
      activeMenuAtCurrentSectionMobile(home);
      activeMenuAtCurrentSectionMobile(about);
      activeMenuAtCurrentSectionMobile(projects);
      activeMenuAtCurrentSectionMobile(skills);
      activeMenuAtCurrentSectionMobile(footer);
    }

    onScroll();
  }
});

// animação do desktop

function activeMenuAtCurrentSectionDesktop(section) {
  const targetLine = scrollY + innerHeight / 3;

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

// animação do mobile

function activeMenuAtCurrentSectionMobile(section) {
  const targetLine = scrollY + innerHeight / 6;

  const sectionTop = section.offsetTop;

  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElementMobile = document.querySelector(
    `.mobile a[href*=${sectionId}]`
  );

  menuElementMobile.classList.remove("active");

  if (sectionBoundaries) {
    menuElementMobile.classList.add("active");
  }
}
