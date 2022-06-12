import { TextInputComponent } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../../redux/reducers/themeReducer/types";
import TextInput from "./TextInput.styled";

interface IProps {
  theme: Theme
  isFocused: boolean,
  minHeight?: string,
  textAlignV: 'top' | 'center' | 'bottom'
}

export const TextAreaScalable = styled(TextInput).attrs(({ theme, isFocused, textAlignV }) => ({
  placeholderTextColor: theme.PLACEHOLDER_COLOR,
  multiline: true,
  textAlignVertical: textAlignV,
  isFocused,
})) <TextInputComponent | IProps>`
  min-height: ${({ minHeight }) => minHeight || "20px"};
  max-height: 400px;
  padding: 10px 20px;
`