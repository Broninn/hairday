import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    //Recupera somente a hora
    const [scheduleHour] = hour.split(":");

    // Adciona a hora na date e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    // Define se o horário está disponível
    return {
      hour,
      available: isHourPast,
    };
  });
  console.log(opening);
  return opening;
}
