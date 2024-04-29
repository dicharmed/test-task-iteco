import { FilterFields } from "./constants";

export type FilterValuesType = {
  [FilterFields.from]: string | null;
  [FilterFields.to]: string | null;
  [FilterFields.transportationNumber]: string | null;
  [FilterFields.date]: string | null;
};

export type OptionsType = { value: string };
