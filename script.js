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

// button

document.getElementById("scrollButton").addEventListener("click", () => {
  document
    .getElementById("service-page")
    .scrollIntoView({ behavior: "smooth" });
});

const type_writer_array = document.querySelectorAll(".type_write"); // Sélectionne tous les éléments avec la classe .type_write

// Efface tout le contenu avant de commencer
type_writer_array.forEach((type_writer) => {
  type_writer.dataset.originalText = type_writer.innerHTML;
});

let currentElementIndex = 0;

function typewriter(type_writer, callback) {
  const copy = type_writer.dataset.originalText;
  const size_word = copy.length;

  function writeChar() {
    if (i < size_word) {
      type_writer.innerHTML += copy[i];
      i++;
      setTimeout(writeChar, 25);
    } else {
      callback();
    }
  }

  writeChar();
}

function processNextElement() {
  if (currentElementIndex < type_writer_array.length) {
    const currentElement = type_writer_array[currentElementIndex];
    typewriter(currentElement, () => {
      currentElementIndex++;
      processNextElement();
    });
  }
}

processNextElement();
