const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// function to map a range of numbers based on a range
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

let load = 0;
const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerHTML = load + "%";
  // setting the opacity
  const opacityValue = scale(load, 0, 100, 1, 0);
  loadingText.style.opacity = opacityValue;

  // setting the blur
  const blurValue = scale(load, 0, 100, 30, 0);
  bg.style.filter = `blur(${blurValue}px)`;
};

const int = setInterval(blurring, 30);
