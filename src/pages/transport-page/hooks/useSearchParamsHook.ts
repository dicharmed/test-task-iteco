import { useSearchParams } from "react-router-dom";

import { getFormattedDate } from "../../../utils";
import { FilterValuesType } from "../../../components/transport-filter/transport-filter.types";

type UseSearchParamsHookReturn = [
  FilterValuesType,
  (values: Partial<FilterValuesType>) => void,
];

export const useSearchParamsHook = (): UseSearchParamsHookReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const transportationNumber = searchParams.get("transportationNumber");
  const date = searchParams.get("date");

  const params: FilterValuesType = { from, to, transportationNumber, date };

  const changeSearchParams = (values: Partial<FilterValuesType>): void => {
    const newSearchParams = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      if (key === "date") value = value ? getFormattedDate(value) : value;
      if (value) {
        newSearchParams.set(key, value);
      }
    });

    setSearchParams(newSearchParams);
  };

  return [params, changeSearchParams];
};
