import React from "react";
import { InputCustom } from "../input-custom/input-custom";
import { InputsWithSwapBtn } from "../inputs-with-swap-btn/inputs-with-swap-btn";
import { Button, Flex, Typography } from "antd";
import styled from "styled-components";
import { FormProps } from "react-router-dom";
import { FilterInputValuesType } from "./transport-filter-form.types";
import { DatePickerCustom } from "../date-picker-custom/date-picker-custom";
const { Title, Text } = Typography;

type Props = Pick<FormProps, "onReset" | "onSubmit"> & {
  inputValues: FilterInputValuesType;
  onSwap(e: React.MouseEvent): void;
};
export const TransportFilterForm: React.FC<Props> = ({
  inputValues,
  onSubmit,
  onReset,
  onSwap,
}) => {
  const { transportationNumber, from, to, date } = inputValues;
  return (
    <CardContent onSubmit={onSubmit} onReset={onReset}>
      <TitleStyled level={4}>Поиск грузов</TitleStyled>
      <InputCustom
        name={transportationNumber.name}
        placeholder={transportationNumber.placeholder}
        value={transportationNumber.value || ""}
        onChange={transportationNumber.onChange}
      />

      <InputsWithSwapBtn firstInput={from} secondInput={to} onSwap={onSwap} />

      {/*<DatePickerStyled*/}
      {/*  name={date.name}*/}
      {/*  placeholder={date.placeholder}*/}
      {/*  value={date.value ? dayjs(date.value as string) : ""}*/}
      {/*  onChange={(i) => date.onChange(i)}*/}
      {/*/>*/}
      <DatePickerCustom date={date} />

      <Flex justify="flex-end">
        <ButtonLink type="link" htmlType="reset">
          <Text type="secondary" underline>
            Сбросить фильтры
          </Text>
        </ButtonLink>
      </Flex>
      <SearchBtn htmlType="submit">Поиск</SearchBtn>
    </CardContent>
  );
};

const CardContent = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, 48px);
  justify-content: space-between;
  align-items: center;
  grid-gap: 15px 10px;
`;

const TitleStyled = styled(Title)`
  text-align: left;
`;

const SearchBtn = styled(Button)`
  height: 100%;
  background-color: #ff9a19;
  border-color: #ff9a19;
  text-transform: uppercase;
  font-size: 16px;
  color: white;
`;

const ButtonLink = styled(Button)`
  padding: 0;
`;
