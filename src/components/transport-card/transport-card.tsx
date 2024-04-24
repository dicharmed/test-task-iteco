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
    <Card>
      <Content>
        <div style={{ textAlign: "left" }}>
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
        </div>
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
        <div style={{ paddingLeft: "24px" }}>
          <Text strong style={{ fontSize: "18px" }}>
            {price && getFormattedPrice(price)} ₽
          </Text>
          <Text type="secondary" style={{ display: "block" }}>
            ГСМ: {GSM && getFormattedPrice(GSM)} ₽
          </Text>
        </div>
      </Content>
    </Card>
  );
};

const Content = styled("div")`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  align-items: center;

  & > div:not(:last-child) {
    border-right: 1px solid #e7e7e7;
  }
`;

const TextStrong = styled(Text)`
  margin-right: 7px;
`;

const SecondColumn = styled("div")`
  display: flex;
  justify-content: space-evenly;
`;
