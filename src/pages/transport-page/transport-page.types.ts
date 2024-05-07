import { FilterFields } from "../../components/transport-filter/constants";
import { FilterValuesType } from "../../components/transport-filter/transport-filter.types";

type FilterValuesTypeBase = Omit<FilterValuesType, "date">;

export interface TransportPageParams extends FilterValuesTypeBase {
  [FilterFields.date]: string | null;
}
