const elements = document.getElementsByClassName("has-submenu");

Array.from(elements).forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("active");
  })
  
  element.addEventListener("mouseout", () => {
    element.classList.remove("active");
  })

  element.addEventListener("click", (event) => {
    element.classList.toggle("active");
    if (element.getAttribute("aria-expanded") === "true") {
      element.setAttribute("aria-expanded", false);
    } else {
      element.setAttribute("aria-expanded", true);
    }

    event.preventDefault();
  })
});
