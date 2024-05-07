import { InputProps } from "antd";
import { CustomInputProps } from "../inputs-with-swap-btn/inputs-with-swap-btn.types";

export type FilterInputValuesType = {
  transportationNumber: InputProps;
  from: CustomInputProps;
  to: CustomInputProps;
  date: DatePickerType;
};

export type DatePickerType = Pick<
  InputProps,
  "name" | "value" | "placeholder"
> & {
  onChange: (date: unknown) => void;
};
