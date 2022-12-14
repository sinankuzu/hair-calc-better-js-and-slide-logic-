const slide = document.querySelector(".swiper");
const button = document.querySelector(".button");
const previous = document.querySelector(".back");
const pageThreeMan = document.querySelector(".man-page");
const pageThreeWoman = document.querySelector(".woman-page");
const man = document.querySelector(".man");
const woman = document.querySelector(".woman");
const level = document.querySelector(".level-1");
const womanProblem = document.querySelectorAll(".woman-page img");
const manProblem = document.querySelectorAll(".man-page img");
const durationProblem = document.querySelectorAll(".fourth-page img");
let position = 0;
let counter = 1;
let levelPage = 75;

// next slide/page

const next = (e) => {
  slide.style.transform = `translateX(${position - 650}px)`;
  position -= 650;

  // Level/page bar filling

  level.style.width = `${levelPage + 75}px`;
  levelPage += 75;

  // next for second page

  if (counter == 2) {
    // displays back button
    previous.style.display = "block";

    //It will bring the woman page or man page. man/woman = 2nd page choose with image,
    //pageThree... = third page will be man or woman due to 2nd page choice.

    if (e.target.classList == "man") {
      man.classList.add("selected");
      pageThreeMan.classList.add("show");
      woman.classList.remove("selected");
      pageThreeWoman.classList.remove("show");
    } else if (e.target.classList == "woman") {
      woman.classList.add("selected");
      pageThreeWoman.classList.add("show");
      man.classList.remove("selected");
      pageThreeMan.classList.remove("show");
    }
  }

  if (counter == 3) {
    womanProblem.forEach((element) => {
      if (e.target.classList == element.classList.value) {
        element.classList.add("selected");
      }
      if (e.target.classList != element.classList.value) {
        element.classList.remove("selected");
      }
    });
  }

  manProblem.forEach((element) => {
    if (e.target.classList == element.classList.value) {
      element.classList.add("selected");
    }
    if (e.target.classList != element.classList.value) {
      element.classList.remove("selected");
    }
  });

  if (counter == 4) {
    durationProblem.forEach((element) => {
      if (e.target.classList == element.classList.value) {
        element.classList.add("selected");
      }
      if (e.target.classList != element.classList.value) {
        element.classList.remove("selected");
      }
    });
  }

  counter++;
};



// hide back button at the first page

previous.style.display = "none";

// previous slide/ page

const back = () => {
  if (counter >= 2) {
    slide.style.transform = `translateX(${position + 650}px)`;
    position += 650;
    counter--;

    // Level/page bar decreasing

    level.style.width = `${levelPage - 75}px`;
    levelPage -= 75;

    // Hide back button if the user returned to first page

    if (counter == 1) {
      previous.style.display = "none";
      level.style.width = "75px";
    }
  }
};

// adding on click functions

button.addEventListener("click", next);
previous.addEventListener("click", back);
man.addEventListener("click", next);
woman.addEventListener("click", next);
// recedingHairline.addEventListener("click", next);

womanProblem.forEach((e) => {
  e.addEventListener("click", next);
});

manProblem.forEach((e) => {
  e.addEventListener("click", next);
});

durationProblem.forEach((e) => {
  e.addEventListener("click", next);
});
