const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1; // which circle is active on the nodelist that is returned from querySelectorAll

next.addEventListener("click", () => {
  if (currentActive < circle.length) {
    currentActive++;
  } else {
    currentActive = circle.length;
  }
  update();
});

prev.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  } else {
    currentActive = 1;
  }
  update();
});

const update = () => {
  circle.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width = `${
    ((actives.length - 1) / (circle.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
