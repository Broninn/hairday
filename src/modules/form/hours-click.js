export function hoursCLick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove a class hour-selected de todas as li não selecionadas
      hours.forEach((hours) => {
        hours.classList.remove("hour-selected");
      });
      // adiciona a class na li clicada
      selected.target.classList.add("hour-selected");
    });
  });
}
