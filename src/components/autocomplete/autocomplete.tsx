import React from "react";
import styled from "styled-components";
import { AutoComplete, AutoCompleteProps } from "antd";
import { OptionsType } from "../transport-filter/transport-filter.types";

type Props = {
  value?: string;
  options: Array<OptionsType>;
  filterOption: any;
  children?: React.ReactNode;
  onChange: AutoCompleteProps["onChange"];
  debounceTimer?: number;
};
export const AutocompleteCustom: React.FC<Props> = ({
  options,
  filterOption,
  children,
  onChange,
  value,
}) => {
  return (
    <AutoCompleteStyled
      options={options}
      filterOption={filterOption}
      value={value}
      onChange={onChange}
    >
      {children}
    </AutoCompleteStyled>
  );
};

const AutoCompleteStyled = styled(AutoComplete)`
  width: 100%;
  height: 100%;
`;
