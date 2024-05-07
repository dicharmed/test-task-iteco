import React from "react";
import styled from "styled-components";
import { Input, InputProps, InputRef } from "antd";

type Props = InputProps & {
  ref?: React.LegacyRef<InputRef>;
  $borderColor?: string;
  $paddingLeft?: string;
};
export const InputCustom: React.FC<Props> = React.forwardRef((props, ref) => {
  return <InputStyled {...props} ref={ref} />;
});

const InputStyled = styled(Input)<{
  $borderColor?: string;
  $paddingLeft?: string;
}>`
  height: 48px;
  padding-left: ${(props) => props.$paddingLeft || "auto"};
  border-color: ${(props) => props.$borderColor || "#d9d9d9"};
`;
