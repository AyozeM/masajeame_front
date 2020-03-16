import { DatepickerOptions } from "materialize-css";
/**
 * Meses en español
 */
export const spanishMonths: string[] = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

/**
 * Abreviatura de meses en español
 */
export const spanishMonthsShort: string[] = spanishMonths.map(e => e.slice(0, 3));

/**
 * Días de la semana en español
 */
export const spanishWeekDays: string[] = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
]
/**
 * Abreviatura de días de la semana en espñaol
 */
export const spanishWeekDaysShort: string[] = spanishWeekDays.map(e => e.slice(0, 3));
/**
 * Abreviatura de una sola letra para los días de la semana en español
 */
export const spanisWeekDaysVeryShort: string[] = spanishWeekDays.map((e, i) => i === 2 ? 'x' : e.slice(0, 1));

/**
 * Cofiguración genérica de un datepicker español
 */
export const spanishDefaultDatePickerOptions = {
  firstDay: 1,
  format: "dd/mm/yyyy",
  i18n: {
    months: spanishMonths,
    monthsShort: spanishMonthsShort,
    weekDays: spanishWeekDays,
    weekdaysShort: spanishWeekDaysShort,
    weekdaysAbbrev: spanisWeekDaysVeryShort,
    cancel: 'Cancelar',
    clear: 'Limpiar'
  },
}

/**
 * Elimna las horas de offset de una fecha
 * @param date fecha original
 * @returns fecha utc
 */
export const DateWithoutOffset = (date: Date): Date => {
  const offset: number = date.getTimezoneOffset() * 60000;
  const realDate: Date = new Date(date.getTime() + offset);
  return realDate;
};

/**
 * Convierte un tipo date en un string tipo yyyy-mm-dd
 * @param date fecha a convertir
 */
export const getDefaultStringDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}