import React, { useState } from "react";
import { Card } from "antd";

import { FilterValuesType, OptionsType } from "./transport-filter.types";
import { FilterFields } from "./constants";
import { FormikErrors } from "formik/dist/types";
import { TransportFilterForm } from "../transport-filter-form/transport-filter-form";
import { FilterInputValuesType } from "../transport-filter-form/transport-filter-form.types";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement> | undefined) => void;
  onChange: (e: React.ChangeEvent) => void;
  onDatePickerChange: (date: unknown) => void;
  onReset: (e: React.FormEvent<HTMLFormElement>) => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean,
  ) => Promise<FormikErrors<FilterValuesType>> | Promise<void>;
  values: FilterValuesType;
};
export const TransportFilter: React.FC<Props> = ({
  onSubmit,
  onChange,
  onDatePickerChange,
  onReset,
  setFieldValue,
  values,
}): React.ReactElement => {
  const [from, setFrom] = useState(values.from || "");
  const [to, setTo] = useState(values.to || "");
  const { transportationNumber, date } = values;
  const {
    from: fromField,
    to: toField,
    transportationNumber: transportNumField,
    date: dateField,
  } = FilterFields;

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setFieldValue(fromField, to);
    setFieldValue(toField, from);
  };

  const handleFilterOption = (inputValue: string, option: OptionsType) =>
    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;

  const handleChange = (
    setField: React.Dispatch<React.SetStateAction<string>>,
    field: FilterFields,
    value: string,
    option: OptionsType,
  ) => {
    const val = value ?? option.value;

    if (val !== null && val !== undefined) {
      setField(val);
      setFieldValue(field, val);
    }
  };
  const handleChangeFrom = (value: unknown, option: any) =>
    handleChange(setFrom, fromField, value as string, option);

  const handleChangeTo = (value: unknown, option: any) =>
    handleChange(setTo, toField, value as string, option);

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    onReset(e);
    setFrom("");
    setTo("");
    setFieldValue(fromField, "");
    setFieldValue(toField, "");
  };

  const inputValues: FilterInputValuesType = {
    transportationNumber: {
      name: transportNumField,
      value: transportationNumber,
      placeholder: "№ заказа",
      onChange: onChange,
    },
    from: {
      name: fromField,
      value: from,
      placeholder: "Откуда",
      onChange: handleChangeFrom,
      filterOption: handleFilterOption,
    },
    to: {
      name: toField,
      value: to,
      placeholder: "Куда",
      onChange: handleChangeTo,
      filterOption: handleFilterOption,
    },
    date: {
      name: dateField,
      value: date,
      placeholder: "Дата погрузки",
      onChange: onDatePickerChange,
    },
  };

  return (
    <Card>
      <TransportFilterForm
        inputValues={inputValues}
        onSwap={handleSwap}
        onReset={handleReset}
        onSubmit={onSubmit}
      />
    </Card>
  );
};
