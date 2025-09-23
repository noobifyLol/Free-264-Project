  const openMapBtn = document.getElementById('openMapBtn');
  const closeb = document.getElementById('close');
  const butto = document.getElementById('buttonpopup');


openMapBtn.addEventListener("click", () => {
    butto.classList.add("showt");
  });
  closeb.addEventListener("click", () => {
    butto.classList.remove("showt");
  });
