import React from "react";
import { useFormik } from "formik";
import {
  FilterValues,
  TransportFilterComponent,
} from "../components/transport-filter.component";

import { useSearchParams } from "react-router-dom";
import { getFormattedDate } from "../../../utils";

export const TransportFilterWrapper: React.FC = (): React.ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  const handleResetForm = (e: React.FormEvent) => {
    formik.handleReset(e);
    formik.setFieldValue("date", "");
    setSearchParams({});
  };
  const queryStringChange = (values: FilterValues) => {
    const newSearchParams = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      if (key === "date") value = value ? getFormattedDate(value) : value;
      if (value) {
        newSearchParams.set(key, value);
      }
    });

    setSearchParams(newSearchParams);
  };

  return (
    <TransportFilterComponent
      values={formik.values}
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      handleReset={handleResetForm}
      handleDatePickerChange={(date) => formik.setFieldValue("date", date)}
    />
  );
};
