import {
  Input,
  FormControl,
  FormErrorMessage,
  Select,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FormInputProps } from "./type";

export const FormInput: React.FC<FormInputProps> = ({
  onChange,
  label,
  type,
  mr,
  onInput,
  h,
  isInvalid,
  error,
  value,
  placeholder,
  min,
  max,
  isRequired,
  size,
  autocomplete,
  onBlur,
  onClick,
  innerElement,
  onPaste,
}) => {
  return (
    <FormControl textAlign="left" isInvalid={isInvalid} mr={mr} mb="30px">
      {label && (
        <b>
          {label}
          <br></br>
        </b>
      )}

      <InputGroup>
        {innerElement ? (
          <InputLeftElement mt="3px" pointerEvents="none">
            {innerElement}
          </InputLeftElement>
        ) : (
          ""
        )}

        <Input
          autoComplete={autocomplete}
          color="appGray"
          onPaste={onPaste}
          variant="filled"
          onInput={onInput}
          blur={onBlur}
          onClick={onClick}
          min={min}
          h="45px"
          max={max}
          size={size}
          {...error}
          isRequired={isRequired}
          type={type}
          border="1px solid #1B1D2847"
          w="100%"
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </InputGroup>

      <FormErrorMessage>{isInvalid}</FormErrorMessage>
    </FormControl>
  );
};
