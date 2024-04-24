import { fakerApi } from "./faker-api";
import { FilterValuesType } from "../components/transport-filter/transport-filter.types";
import { TransportationType } from "../types";

export const getData = (
  params: FilterValuesType,
): Array<TransportationType> => {
  const {
    getId,
    getCity,
    getCountry,
    getDate,
    getTransportationName,
    getTransportationNumber,
    getPrice,
    getDistance,
    getGSM,
  } = fakerApi;
  return [
    ...Array.from({ length: 5 }, () => {
      return {
        id: getId(),
        from: {
          country: getCountry(),
          city: params.from ?? getCity(),
        },
        to: {
          country: getCountry(),
          city: params.to ?? getCity(),
        },
        date: params.date ?? getDate(),
        transportationName: getTransportationName(),
        transportationNumber:
          params.transportationNumber ?? getTransportationNumber(),
        distance: getDistance(),
        price: getPrice(),
        GSM: getGSM(),
      };
    }),
  ];
};
