import React from "react";
import { useFormik } from "formik";
import { TransportFilterComponent } from "./components/transport-filter-component";

export const TransportFilter: React.FC = (): React.ReactElement => {
  const formik = useFormik({
    initialValues: {
      from: "",
      to: "",
      orderNumber: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
