import React from "react";
import styled from "styled-components";
import { Input, InputProps } from "antd";

type Props = InputProps & { borderColor?: string; paddingLeft?: string };
export const TransportFilterInput: React.FC<Props> = ({
  name,
  value,
  placeholder,
  onChange,
  borderColor,
  paddingLeft,
}) => {
  return (
    <InputStyled
      name={name}
      value={value}
      placeholder={placeholder}
      $borderColor={borderColor}
      $paddingLeft={paddingLeft}
      onChange={onChange}
    />
  );
};

const InputStyled = styled(Input)<{
  $borderColor?: string;
  $paddingLeft?: string;
}>`
  height: 48px;
  padding-left: ${(props) => props.$paddingLeft || "auto"};
  border-color: ${(props) => props.$borderColor || "#d9d9d9"};
`;
