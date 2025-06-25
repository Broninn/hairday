import { hoursLoad } from "../form/hours-load.js";

//seleciona input de data
const selectedDate = document.getElementById("date");

export function schedulesDay() {
  //obtém data input
  const date = selectedDate.value;

  //Renderiza as horas disponíveis
  hoursLoad({ date });
}
