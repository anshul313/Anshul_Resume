var skillprogress = document.querySelectorAll(".skill-progress > div");
var done = false;

window.addEventListener("scroll", check);

function initializebar() {
  for (var bar of skillprogress) {
    bar.style.width = 0 + "%";
    bar.setAttribute("done", false);
  }
}

initializebar();

function fillbar(bar) {
  let width = 0;
  let target = bar.getAttribute("data-bar-width");
  let interval = setInterval(function () {
    if (width > target) {
      clearInterval(interval);
    }
    width++;
    bar.style.width = width + "%";
  }, 6);
}

function check() {
  for (var bar of skillprogress) {
    var coordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("done") == "false" &&
      coordinates.top < window.innerHeight - coordinates.height
    ) {
      bar.setAttribute("done", true);
      fillbar(bar);
    } else if (coordinates.top > window.innerHeight) {
      bar.setAttribute("done", false);
      initializebar();
    }
  }
}
