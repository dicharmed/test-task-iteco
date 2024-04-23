import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { TransportPageComponent } from "./components/transport-page.component";
import { API } from "../../API/transportation-api";

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

  return <TransportPageComponent data={data} isLoading={isLoading} />;
};
