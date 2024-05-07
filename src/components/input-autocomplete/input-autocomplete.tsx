import React, { useRef } from "react";
import { AutoComplete, AutoCompleteProps, InputProps, InputRef } from "antd";
import { InputCustom } from "../input-custom/input-custom";
import styled from "styled-components";
import { options as mockOptions } from "../transport-filter/constants";

type Props = AutoCompleteProps &
  InputProps & {
    $paddingLeft?: string;
    $borderColor?: string;
  };
export const InputAutocomplete: React.FC<Props> = ({
  name,
  value,
  options = mockOptions,
  placeholder,
  filterOption,
  onChange,
  onSelect,
  $paddingLeft,
  $borderColor,
}) => {
  const ref = useRef<InputRef>(null);

  const autocompleteProps = {
    value: value,
    options: options,
    filterOption: filterOption,
    onChange: onChange,
    onSelect: onSelect,
  };

  const inputProps = {
    ref: ref,
    name: name,
    value: value || "",
    placeholder: placeholder,
    $borderColor: $borderColor,
    $paddingLeft: $paddingLeft,
  };

  return (
    <AutoCompleteStyled {...autocompleteProps}>
      <InputCustom {...inputProps} />
    </AutoCompleteStyled>
  );
};

const AutoCompleteStyled = styled(AutoComplete)`
  width: 100%;
  height: 100%;
`;
