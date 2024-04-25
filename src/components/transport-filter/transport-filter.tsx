import React from "react";
import { Button, Card, DatePicker, Flex, Input, Typography } from "antd";
import SwapIcon from "../../assets/swap-icon.svg?react";
import styled from "styled-components";
import dayjs from "dayjs";
import { FilterValuesType } from "./transport-filter.types";
import { FilterFields } from "./constants";
const { Title, Text } = Typography;

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (e: React.ChangeEvent) => void;
  handleDatePickerChange: (date: unknown) => void;
  handleReset: (e: React.FormEvent<HTMLFormElement>) => void;
  values: FilterValuesType;
};
export const TransportFilter: React.FC<Props> = ({
  handleSubmit,
  handleChange,
  handleDatePickerChange,
  handleReset,
  values,
}): React.ReactElement => {
  const { transportationNumber, from, to, date } = values;
  const {
    from: fromField,
    to: toField,
    transportationNumber: transportNumField,
    date: dateField,
  } = FilterFields;

  return (
    <Card>
      <CardContent onSubmit={handleSubmit} onReset={handleReset}>
        <TitleStyled level={4}>Поиск грузов</TitleStyled>
        <InputStyled
          name={transportNumField}
          placeholder="№ заказа"
          value={transportationNumber || ""}
          onChange={handleChange}
        />

        <InputGroup gap="small">
          <InputStyled
            name={fromField}
            $borderColor="green"
            placeholder="Откуда"
            value={from || ""}
            onChange={handleChange}
          />
          <SwapIconBtn shape="circle" icon={<SwapIcon />} />
          <InputStyled
            name={toField}
            $borderColor="green"
            placeholder="Куда"
            $paddingLeft="20px"
            value={to || ""}
            onChange={handleChange}
          />
        </InputGroup>
        <DatePickerStyled
          name={dateField}
          placeholder="Дата погрузки"
          value={date ? dayjs(date) : ""}
          onChange={(date) => handleDatePickerChange(date)}
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
  transform: translate(-57%, -50%);
  z-index: 1;
`;

const ButtonLink = styled(Button)`
  padding: 0;
`;
