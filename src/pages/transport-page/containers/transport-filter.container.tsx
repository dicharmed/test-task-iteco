import React from "react";
import { useFormik } from "formik";
import { TransportFilter } from "../../../components/transport-filter/transport-filter";

import { useSearchParamsHook } from "../hooks/useSearchParamsHook";
import { FilterValuesType } from "../../../components/transport-filter/transport-filter.types";
import { FilterFields } from "../../../components/transport-filter/constants";

export const TransportFilterContainer: React.FC = (): React.ReactElement => {
  const [params, setParams] = useSearchParamsHook();

  const formik = useFormik<FilterValuesType>({
    initialValues: params,
    onSubmit: (values) => {
      setParams(values);
    },
    onReset: () => {
      setParams({});
    },
  });

  const { values, handleSubmit, handleChange, handleReset, setFieldValue } =
    formik;

  return (
    <TransportFilter
      values={values}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onReset={handleReset}
      setFieldValue={setFieldValue}
      onDatePickerChange={(date) => setFieldValue(FilterFields.date, date)}
    />
  );
};
