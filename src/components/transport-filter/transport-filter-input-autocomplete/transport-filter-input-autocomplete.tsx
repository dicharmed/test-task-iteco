import React from "react";
import { AutoComplete, AutoCompleteProps, InputProps } from "antd";
import { TransportFilterInput } from "../transport-filter-input/transport-filter-input";
import styled from "styled-components";

type Props = AutoCompleteProps & InputProps & { paddingLeft?: string };
export const TransportFilterInputAutocomplete: React.FC<Props> = ({
  name,
  value,
  options,
  placeholder,
  filterOption,
  onChange,
  onSelect,
  paddingLeft,
}) => {
  return (
    <AutoCompleteStyled
      value={value}
      options={options}
      filterOption={filterOption}
      onChange={onChange}
      onSelect={onSelect}
    >
      <TransportFilterInput
        name={name}
        value={value}
        placeholder={placeholder}
        borderColor="green"
        paddingLeft={paddingLeft}
      />
    </AutoCompleteStyled>
  );
};

const AutoCompleteStyled = styled(AutoComplete)`
  width: 100%;
  height: 100%;
`;
