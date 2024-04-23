import * as React from "react";
import { TransportFilterWrapper } from "../wrappers/transport-filter.wrapper";
import { Spin } from "antd";
import { TransportListComponent } from "./transport-list.component";
import { TransportationType } from "../../../API/transportation-api";
import styled from "styled-components";

type Props = {
  data: Array<TransportationType> | undefined;
  isLoading: boolean;
};

const Wrapper = styled("div")`
  display: grid;
  grid-row-gap: 30px;
`;
export const TransportPageComponent: React.FC<Props> = ({
  isLoading,
  data,
}) => {
  return (
    <Wrapper>
      <TransportFilterWrapper />
      {isLoading ? (
        <Spin tip="Loading">
          <div className="content" />
        </Spin>
      ) : (
        data && <TransportListComponent list={data} />
      )}
    </Wrapper>
  );
};
