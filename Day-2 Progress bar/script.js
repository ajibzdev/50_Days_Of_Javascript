let circles = [...document.querySelectorAll(".circle")];
const progress = document.querySelector(".progress");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

let currentActive =
  circles.findIndex((circle) => circle.classList.contains("active")) + 1;

if (currentActive == 0) {
  currentActive = 1;
}

const update = function () {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircle = circles.filter((circle) =>
    circle.classList.contains("active")
  );
  progress.style.width = +"%";
};

btnNext.addEventListener("click", () => {
  currentActive += 1;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

btnPrev.addEventListener("click", () => {
  currentActive -= 1;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
