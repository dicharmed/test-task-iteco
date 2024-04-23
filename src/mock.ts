import { TransportationType } from "./API/transportation-api";
import { FilterValues } from "./pages/transport-page/components/transport-filter.component";
import { fakerApi } from "./API/faker-api";

export const getData = (params: FilterValues): Array<TransportationType> => {
  const {
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
    ...Array.from({ length: 5 }, (_, x) => {
      return {
        index: x,
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
