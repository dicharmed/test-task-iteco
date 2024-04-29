import { OptionsType } from "./transport-filter.types";

export enum FilterFields {
  from = "from",
  to = "to",
  transportationNumber = "transportationNumber",
  date = "date",
}

export const options: Array<OptionsType> = [
  {
    value: "Москва",
  },
  {
    value: "Тверь",
  },
  {
    value: "Санкт-Петербург",
  },
  {
    value: "Воронеж",
  },
  {
    value: "Вологда",
  },
  {
    value: "Таганрог",
  },
];
