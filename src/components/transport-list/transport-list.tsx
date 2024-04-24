import React from "react";
import { TransportCard } from "../transport-card/transport-card";
import styled from "styled-components";
import { TransportationType } from "../../types";

type Props = {
  list: Array<TransportationType>;
};
export const TransportList: React.FC<Props> = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item) => {
        return <TransportCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: grid;
  grid-row-gap: 20px;
`;
