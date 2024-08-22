import {
  ReactNode,
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  MouseEventHandler,
} from "react";

export interface FormInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEvent<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void;
  label?: string;
  type?: string;
  mr?: string;
  id?: string;
  isInvalid?: any;
  error?: { [key: string]: any };
  value?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  isRequired?: boolean;
  size?: string;
  autocomplete?: string;
  innerElement?: ReactNode;
  h?: any;
}
