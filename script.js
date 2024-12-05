// event start when html is loaded
document.addEventListener("DOMContentLoaded", () => {
    // get array of every .hidden element
    const elementsToAnimate = document.querySelectorAll(".hidden");
    // create new observer for every class item
  
    //when you scroll hover over a given element, you add the class visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.add("hidden");
          entry.target.classList.remove("visible");
        }
      });
    });
    //launch the observer function for every element of the class hidden
    elementsToAnimate.forEach((element) => observer.observe(element));
  });