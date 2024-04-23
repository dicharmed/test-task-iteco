import React from "react";
import { Button, Card, DatePicker, Flex, Input, Typography } from "antd";
import SwapIcon from "../../../assets/swap-icon.svg?react";
import styled from "styled-components";
import dayjs from "dayjs";
const { Title, Text } = Typography;

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

export type FilterValues = {
  from: string | null;
  to: string | null;
  transportationNumber: string | null;
  date: string | null;
};
type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (e: React.ChangeEvent) => void;
  handleDatePickerChange: (date: unknown) => void;
  values: FilterValues;
};
export const TransportFilterComponent: React.FC<Props> = ({
  handleSubmit,
  handleChange,
  handleDatePickerChange,
  values,
}): React.ReactElement => {
  const { transportationNumber, from, to, date } = values;

  return (
    <Card>
      <CardContent onSubmit={handleSubmit}>
        <TitleStyled level={4}>Поиск грузов</TitleStyled>
        <InputStyled
          name="transportationNumber"
          placeholder="№ заказа"
          value={transportationNumber || ""}
          onChange={handleChange}
        />

        <InputGroup gap="small">
          <InputStyled
            name="from"
            $borderColor="green"
            placeholder="Откуда"
            value={from || ""}
            onChange={handleChange}
          />
          <SwapIconBtn shape="circle" icon={<SwapIcon />} />
          <InputStyled
            name="to"
            $borderColor="green"
            placeholder="Куда"
            $paddingLeft="20px"
            value={to || ""}
            onChange={handleChange}
          />
        </InputGroup>
        <DatePickerStyled
          name="date"
          placeholder="Дата погрузки"
          defaultValue={date ? dayjs(date) : ""}
          onChange={(date) => handleDatePickerChange(date)}
        />

        <Flex justify="flex-end">
          <ButtonLink type="link" htmlType="button">
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
