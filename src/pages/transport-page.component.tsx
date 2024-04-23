import * as React from "react";
import { TransportFilterWrapper } from "./transport-page/wrappers/transport-filter.wrapper";
import { useQuery } from "@tanstack/react-query";
import { API } from "../API/transportation-api";
import { useSearchParams } from "react-router-dom";

export const TransportPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const transportationNumber = searchParams.get("transportationNumber");
  const date = searchParams.get("date");

  const { data, isLoading, error } = useQuery({
    queryKey: ["data", from, to, transportationNumber, date],
    queryFn: () =>
      API.getTransportations({
        from,
        to,
        transportationNumber,
        date,
      }),
  });

  if (error) {
    return <div>Error!!!</div>;
  }

  return (
    <>
      <TransportFilterWrapper />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>Transport List...</div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </>
  );
};