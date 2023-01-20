var hamburger;
var navbar;
export function initialize() {
  hamburger = document.getElementById("bthsTech_hamburger");
  navbar = document.getElementById("bthsTech__navbar-links_container");
  let links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", toggleHamburger);
  }
}
export function toggleHamburger() {
  // toggle animations
  navbar.classList.toggle("active");
  hamburger.classList.toggle("cross");
  /*
   adds a delay to make the closing animation work
  */
  if (navbar.classList.contains("appear"))
    setTimeout(function () {
      navbar.classList.toggle("appear");
    }, 400);
  else {
    navbar.classList.toggle("appear");
  }
}
