function readScroll() {
  document.addEventListener("scroll", function () {
    // console.log("being scrolled");
    let timeline = document.querySelector(".bthsTech__timeline");
    let whoBTHS = document.querySelector(".bthsTech__whoBTHSTech");
    // get timeline object and check its distance from top view of webpage
    let windowMax = window.innerHeight;
    let timelineTop = timeline.getBoundingClientRect().top;
    let whoBTHSTop = whoBTHS.getBoundingClientRect().top;
    let emptyDistance = 200;
    // subtract distance to know when to make animation
    if (windowMax - emptyDistance > timelineTop) {
      // timeline should be in view so run the animatio
      timeline.classList.add("reveal");
    } else {
      // timeline should not be in view
      timeline.classList.remove("reveal");
    }
    if (windowMax - emptyDistance > whoBTHSTop) {
      whoBTHS.classList.add("reveal");
    } else {
      whoBTHS.classList.remove("reveal");
    }
  });
}
