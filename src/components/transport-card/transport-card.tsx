import React from "react";
import { Card, Typography } from "antd";
import styled from "styled-components";
import { getFormattedDate, getFormattedPrice } from "../../utils";
import { TransportationType } from "../../types";
const { Text } = Typography;

export const TransportCard: React.FC<TransportationType> = ({
  from,
  to,
  transportationNumber,
  transportationName,
  date,
  GSM,
  distance,
  price,
}) => {
  return (
    <CardStyled>
      <Content>
        <FirstColumn>
          <div>
            <TextStrong strong>{from?.country}</TextStrong>
            <Text type="secondary">{from?.city}</Text>
          </div>
          <div>
            <TextStrong strong>{to?.country}</TextStrong>
            <Text type="secondary">{to?.city}</Text>
          </div>
          <div>
            <TextStrong type="secondary">Расстояние:</TextStrong>
            <TextStrong strong>{distance} км.</TextStrong>
            <Text type="success">+3 пункта</Text>
          </div>
        </FirstColumn>
        <SecondColumn>
          <div style={{ textAlign: "left" }}>
            <Text>{transportationName}</Text>
            <Text type="secondary" style={{ display: "block" }}>
              2.5 т. / 15-23 м3
            </Text>
            <div>
              <Text type="secondary" style={{ marginRight: "4px" }}>
                Погрузка:
              </Text>
              <Text>{date && getFormattedDate(date)}</Text>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <Text type="secondary">{transportationNumber}</Text>
            <Text type="secondary" style={{ display: "block" }}>
              Тент / полная
            </Text>
          </div>
        </SecondColumn>
        <ThirdColumn>
          <Text strong style={{ fontSize: "18px" }}>
            {price && getFormattedPrice(price)} ₽
          </Text>
          <Text type="secondary" style={{ display: "block" }}>
            ГСМ: {GSM && getFormattedPrice(GSM)} ₽
          </Text>
        </ThirdColumn>
      </Content>
    </CardStyled>
  );
};

const CardStyled = styled(Card)`
  @media screen and (max-width: 840px) {
    .ant-card-body {
      padding: 0 20px;
    }
  }
`;

const Content = styled("div")`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  align-items: center;

  & > div:not(:last-child) {
    border-right: 1px solid #e7e7e7;
  }

  @media screen and (max-width: 840px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 107px) 1fr;

    & > div:not(:last-child) {
      border-right: none;
      border-bottom: 1px solid #e7e7e7;
    }
  }
`;

const TextStrong = styled(Text)`
  margin-right: 7px;
`;

const FirstColumn = styled("div")`
  text-align: left;

  @media screen and (max-width: 840px) {
    padding: 20px 0;
    text-align: center;
  }
`;

const SecondColumn = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 24px;

  @media screen and (max-width: 840px) {
    padding: 5px 0 20px;
  }
`;

const ThirdColumn = styled("div")`
  padding-left: 24px;

  @media screen and (max-width: 840px) {
    padding: 10px 0 20px;
  }
`;
