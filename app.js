 open = document.querySelector(".open");
const close = document.querySelector(".close");
const navlinks = document.querySelector(".navlinks-container");

open.addEventListener("click", function () {
  navlinks.classList.add('shownav');
});
close.addEventListener("click", function () {
  navlinks.classList.remove('shownav');
});

