import React, { useState } from "react";
import { Button, Card, DatePicker, Flex, Input, Typography } from "antd";
import SwapIcon from "../../assets/swap-icon.svg?react";
import styled from "styled-components";
import dayjs from "dayjs";
import { FilterValuesType, OptionsType } from "./transport-filter.types";
import { FilterFields, options } from "./constants";
import { FormikErrors } from "formik/dist/types";
import { AutocompleteCustom } from "../autocomplete/autocomplete";
const { Title, Text } = Typography;

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
  const { transportationNumber, date } = values;
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const {
    from: fromField,
    to: toField,
    transportationNumber: transportNumField,
    date: dateField,
  } = FilterFields;

  const handleSwap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
    setFieldValue(fromField, to);
    setFieldValue(toField, from);

    console.log("from", from, "to", to);
  };

  const handleChange = (
    setField: React.Dispatch<React.SetStateAction<string>>,
    field: FilterFields,
    value: string,
    option: OptionsType,
  ) => {
    const val = value ?? option.value;

    if (val) {
      setField(val);
      setFieldValue(field, val);
    }
  };

  const filterOptionFunc = (inputValue: string, option: OptionsType) =>
    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;

  const handleChangeFrom = (value: unknown, option: any) => {
    handleChange(setFrom, fromField, value as string, option);
  };
  const handleChangeTo = (value: unknown, option: any) => {
    handleChange(setTo, toField, value as string, option);
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    onReset(e);
    setFrom("");
    setTo("");
    setFieldValue(fromField, "");
    setFieldValue(toField, "");
  };

  return (
    <Card>
      <CardContent onSubmit={onSubmit} onReset={handleReset}>
        <TitleStyled level={4}>Поиск грузов</TitleStyled>
        <InputStyled
          name={transportNumField}
          placeholder="№ заказа"
          value={transportationNumber || ""}
          onChange={onChange}
        />

        <InputGroup gap="small">
          <AutocompleteCustom
            options={options}
            filterOption={filterOptionFunc}
            onChange={handleChangeFrom}
            value={from}
          >
            <InputStyled
              name={fromField}
              $borderColor="green"
              placeholder="Откуда"
              value={from || ""}
            />
          </AutocompleteCustom>

          <SwapIconBtn
            shape="circle"
            icon={<SwapIcon />}
            onClick={handleSwap}
          />

          <AutocompleteCustom
            options={options}
            filterOption={filterOptionFunc}
            onChange={handleChangeTo}
            value={to}
          >
            <InputStyled
              name={toField}
              $borderColor="green"
              placeholder="Куда"
              $paddingLeft="20px"
              value={to || ""}
            />
          </AutocompleteCustom>
        </InputGroup>
        <DatePickerStyled
          name={dateField}
          placeholder="Дата погрузки"
          value={date ? dayjs(date) : ""}
          onChange={(date) => onDatePickerChange(date)}
        />

        <Flex justify="flex-end">
          <ButtonLink type="link" htmlType="reset">
            <Text type="secondary" underline>
              Сбросить фильтры
            </Text>
          </ButtonLink>
        </Flex>
        <SearchBtn htmlType="submit">Поиск</SearchBtn>
      </CardContent>
    </Card>
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

const InputStyled = styled(Input)<{
  $borderColor?: string;
  $paddingLeft?: string;
}>`
  height: 48px;
  padding-left: ${(props) => props.$paddingLeft || "auto"};
  border-color: ${(props) => props.$borderColor || "#d9d9d9"};
`;

const DatePickerStyled = styled(DatePicker)`
  height: 100%;
`;

const SearchBtn = styled(Button)`
  height: 100%;
  background-color: #ff9a19;
  border-color: #ff9a19;
  text-transform: uppercase;
  font-size: 16px;
  color: white;
`;

const InputGroup = styled(Flex)`
  position: relative;
  align-items: center;
`;

const SwapIconBtn = styled(Button)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-51%, -50%);
  z-index: 1;
`;

const ButtonLink = styled(Button)`
  padding: 0;
`;
