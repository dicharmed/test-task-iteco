import React from "react";
import { TransportCardComponent } from "./transport-card.component";
import { TransportationType } from "../../../API/transportation-api";
import styled from "styled-components";

const Wrapper = styled("div")`
  display: grid;
  grid-row-gap: 20px;
`;

type Props = {
  list: Array<TransportationType>;
};
export const TransportListComponent: React.FC<Props> = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item) => {
        return <TransportCardComponent {...item} />;
      })}
    </Wrapper>
  );
};
