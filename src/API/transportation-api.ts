import { FilterValues } from "../pages/transport-page/components/transport-filter.component";
import { getData } from "../mock";

type LocationType = {
  country: string;
  city: string;
};
export type TransportationType = {
  from: LocationType | null;
  to: LocationType | null;
  date: Date | string | null;
  transportationName: string | null;
  transportationNumber: string | null;
  distance: number | null;
  price: number | null;
  GSM: number | null;
};
class TransportationApi {
  async getTransportations(
    params: FilterValues,
  ): Promise<Array<TransportationType>> {
    await sleep(2000);

    return getData(params);
  }
}

async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const API = new TransportationApi();
