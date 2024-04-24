import { getData } from "./mock";
import { FilterValuesType } from "../components/transport-filter/transport-filter.types";
import { TransportationType } from "../types";

class TransportationApi {
  async getTransportations(
    params: FilterValuesType,
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
