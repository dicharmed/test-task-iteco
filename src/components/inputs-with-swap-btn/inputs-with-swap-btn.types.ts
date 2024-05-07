import { AutoCompleteProps, InputProps } from "antd";

export type CustomInputProps = Pick<
  InputProps,
  "name" | "value" | "placeholder" | "onChange"
> &
  Pick<AutoCompleteProps, "filterOption">;
