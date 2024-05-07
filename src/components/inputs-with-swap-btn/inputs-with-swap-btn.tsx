import React from "react";
import styled from "styled-components";
import { Button, Flex } from "antd";
import SwapIcon from "../../assets/swap-icon.svg?react";
import { InputAutocomplete } from "../input-autocomplete/input-autocomplete";
import { CustomInputProps } from "./inputs-with-swap-btn.types";

type Props = {
  firstInput: CustomInputProps;
  secondInput: CustomInputProps;
  onSwap(e: React.MouseEvent): void;
};
export const InputsWithSwapBtn: React.FC<Props> = ({
  firstInput,
  secondInput,
  onSwap,
}) => {
  return (
    <InputGroup gap="small">
      <InputAutocomplete
        name={firstInput.name}
        value={firstInput.value}
        placeholder={firstInput.placeholder}
        onChange={firstInput.onChange}
        filterOption={firstInput.filterOption}
        $borderColor="green"
      />
      <SwapIconBtn shape="circle" icon={<SwapIcon />} onClick={onSwap} />
      <InputAutocomplete
        name={secondInput.name}
        value={secondInput.value}
        placeholder={secondInput.placeholder}
        onChange={secondInput.onChange}
        filterOption={firstInput.filterOption}
        $borderColor="green"
        $paddingLeft="20px"
      />
    </InputGroup>
  );
};

const InputGroup = styled(Flex)`
  position: relative;
  align-items: center;
`;

const SwapIconBtn = styled(Button)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-51%, -50%);
  z-index: 1;
`;
