import React from "react";
import { Card, Typography } from "antd";
import styled from "styled-components";
const { Text } = Typography;

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

export const TransportCardComponent: React.FC = () => {
  return (
    <Card>
      <Content>
        <div style={{ textAlign: "left" }}>
          <div>
            <TextStrong strong>Обухово пгт</TextStrong>
            <Text type="secondary">Московская обл.</Text>
          </div>
          <div>
            <TextStrong strong>Пушкино</TextStrong>
            <Text type="secondary">Московская обл.</Text>
          </div>
          <div>
            <TextStrong type="secondary">Расстояние:</TextStrong>
            <TextStrong strong>683 км.</TextStrong>
            <Text type="success">+3 пункта</Text>
          </div>
        </div>
        <SecondColumn>
          <div style={{ textAlign: "left" }}>
            <Text>Стройматериалы</Text>
            <Text type="secondary" style={{ display: "block" }}>
              2.5 т. / 15-23 м3
            </Text>
            <div>
              <Text type="secondary" style={{ marginRight: "4px" }}>
                Погрузка:
              </Text>
              <Text>13 мая 2023 16:00</Text>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <Text type="secondary">№А1715798</Text>
            <Text type="secondary" style={{ display: "block" }}>
              Тент / полная
            </Text>
          </div>
        </SecondColumn>
        <div style={{ paddingLeft: "24px" }}>
          <Text strong style={{ fontSize: "18px" }}>
            70 950 ₽
          </Text>
          <Text type="secondary" style={{ display: "block" }}>
            ГСМ: 5 500 ₽
          </Text>
        </div>
      </Content>
    </Card>
  );
};
