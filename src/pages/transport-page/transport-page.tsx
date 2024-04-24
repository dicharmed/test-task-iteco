import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/transportation-api";
import { TransportFilterContainer } from "./containers/transport-filter.container";
import { Spin } from "antd";
import { TransportList } from "../../components/transport-list/transport-list";
import styled from "styled-components";
import { useSearchParamsHook } from "./hooks/useSearchParamsHook";

export const TransportPage: React.FC = () => {
  const [params] = useSearchParamsHook();

  const { data, isLoading, error } = useQuery({
    queryKey: ["data", { ...params }],
    queryFn: () => API.getTransportations(params),
  });

  if (error) {
    return <div>Error!!!</div>;
  }

  return (
    <Wrapper>
      <TransportFilterContainer />
      {isLoading ? (
        <Spin tip="Loading">
          <div className="content" />
        </Spin>
      ) : (
        data && <TransportList list={data} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: grid;
  grid-row-gap: 30px;
`;
