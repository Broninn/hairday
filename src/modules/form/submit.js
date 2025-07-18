import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define data mínima
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  // previne o comportamento de carregamento da página do form
  event.preventDefault();
  try {
    //Recuperando nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recupera o horario selecionado
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora!");
    }

    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um id
    const id = new Date().getTime();

    // Realiza o agendamento
    await scheduleNew({
      id,
      name,
      when,
    });

    // Recarregar os agendamentos
    await schedulesDay();

    // Limpa o campo de nome do cliente
    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
