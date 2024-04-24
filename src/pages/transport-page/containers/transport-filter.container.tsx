import React from "react";
import { useFormik } from "formik";
import { TransportFilter } from "../../../components/transport-filter/transport-filter";

import { useSearchParamsHook } from "../hooks/useSearchParamsHook";
import { FilterValuesType } from "../../../components/transport-filter/transport-filter.types";

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
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleReset={handleReset}
      handleDatePickerChange={(date) => setFieldValue("date", date)}
    />
  );
};