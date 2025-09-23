  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".dropdown ul");

menu.classList.add("hidden");

menuToggle.addEventListener("click", () => {
  if (menu.classList.contains("show")) {

    menu.classList.remove("show");
    menu.addEventListener("transitionend", handleClose, { once: true });
  } else {

    menu.classList.remove("hidden");      
    requestAnimationFrame(() => menu.classList.add("show")); 
  }


  menuToggle.classList.toggle("open");
});

function handleClose(e) {
  if (e.propertyName === "max-height") {
    menu.classList.add("hidden"); 
  }
}