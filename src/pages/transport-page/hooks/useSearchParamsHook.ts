import { useSearchParams } from "react-router-dom";

import { getFormattedDate } from "../../../utils";
import { FilterValuesType } from "../../../components/transport-filter/transport-filter.types";
import { FilterFields } from "../../../components/transport-filter/constants";

type UseSearchParamsHookReturn = [
  FilterValuesType,
  (values: Partial<FilterValuesType>) => void,
];

export const useSearchParamsHook = (): UseSearchParamsHookReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    from: fromField,
    to: toField,
    transportationNumber: transportNumField,
    date: dateField,
  } = FilterFields;

  const from = searchParams.get(fromField);
  const to = searchParams.get(toField);
  const transportationNumber = searchParams.get(transportNumField);
  const date = searchParams.get(dateField);

  const params: FilterValuesType = { from, to, transportationNumber, date };

  const changeSearchParams = (values: Partial<FilterValuesType>): void => {
    const newSearchParams = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      if (key === dateField) value = value ? getFormattedDate(value) : value;
      if (value) {
        newSearchParams.set(key, value);
      }
    });

    setSearchParams(newSearchParams);
  };

  return [params, changeSearchParams];
};
