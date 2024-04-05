import React from "react";
import { Button, Card, DatePicker, Flex, Input, Typography } from "antd";
import SwapIcon from "../../assets/swap-icon.svg?react";
import styled from "styled-components";
const { Title, Text } = Typography;

const CardContent = styled.div`
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
export const TransportFilter: React.FC = (): React.ReactElement => {
  return (
    <Card>
      <CardContent>
        <TitleStyled level={4}>Поиск грузов</TitleStyled>
        <InputStyled placeholder="№ заказа" />

        <InputGroup gap="small">
          <InputStyled $borderColor="green" placeholder="Откуда" />
          <SwapIconBtn shape="circle" icon={<SwapIcon />} />
          <InputStyled
            $borderColor="green"
            placeholder="Куда"
            $paddingLeft="20px"
          />
        </InputGroup>
        <DatePickerStyled placeholder="Дата погрузки" />

        <Flex justify="flex-end">
          <ButtonLink type="link">
            <Text type="secondary" underline>
              Сбросить фильтры
            </Text>
          </ButtonLink>
        </Flex>
        <SearchBtn>Поиск</SearchBtn>
      </CardContent>
    </Card>
  );
};
