import React from "react";
import { useFormik } from "formik";
import {
  FilterValues,
  TransportFilterComponent,
} from "../components/transport-filter.component";

import { useSearchParams } from "react-router-dom";

export const TransportFilterWrapper: React.FC = (): React.ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryStringChange = (values: FilterValues) => {
    const newSearchParams = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        newSearchParams.set(key, value);
      }
    });

    setSearchParams(newSearchParams);
  };

  const formik = useFormik<FilterValues>({
    initialValues: {
      from: searchParams.get("from"),
      to: searchParams.get("to"),
      transportationNumber: searchParams.get("transportationNumber"),
      date: searchParams.get("date"),
    },
    onSubmit: (values) => {
      queryStringChange(values);
    },
  });

  return (
    <TransportFilterComponent
      values={formik.values}
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      handleDatePickerChange={(date) => formik.setFieldValue("date", date)}
    />
  );
};
