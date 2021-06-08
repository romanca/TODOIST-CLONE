import { format } from "date-fns";

export function formatDateToTodoDate(date) {
  if (!date) {
    console.warn("formatDateToTodoDate is not expecting null value");
    return "";
  }
  return format(new Date(date), "dd.MMMM");
}

export function formatDateToProjectDate(date) {
  if (!date) {
    console.warn("fformatDateToProjectDate is not expecting null value");
    return "";
  }
  return format(new Date(date), "EEE d MMMM");
}
