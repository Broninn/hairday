const periods = document.querySelectorAll(".period");

// Gerar evento de click para cada lista
periods.forEach((period) => {
  // Captura o evento de click na lista
  period.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém li pai do elemento clicado
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm("Deseja cancelar esse agendamento?");
        
        if (isConfirm) {
          console.log("Remover");
        }
      }
    }
  });
});
