import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { DatePicker } from "antd";
import { DatePickerType } from "../transport-filter-form/transport-filter-form.types";

type Props = {
  date: DatePickerType;
};

export const DatePickerCustom: React.FC<Props> = ({ date }) => {
  const { name, value, placeholder, onChange } = date;
  return (
    <DatePickerStyled
      name={name}
      placeholder={placeholder}
      format="DD MMM YYYY"
      value={value}
      onChange={(i) => onChange(i)}
    />
  );
};

const DatePickerStyled = styled(DatePicker)`
  height: 100%;
`;
