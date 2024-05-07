import { FilterFields } from "./constants";
import { Dayjs } from "dayjs";

export type FilterValuesType = {
  [FilterFields.from]: string | null;
  [FilterFields.to]: string | null;
  [FilterFields.transportationNumber]: string | null;
  [FilterFields.date]: Dayjs | null;
};

export type OptionsType = { value: string };
