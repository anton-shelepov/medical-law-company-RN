import styled from "styled-components/native";
import { Theme } from "../../../redux/reducers/themeReducer/types";

interface ITextInputProps {
    isFocused: boolean;
    hasError: boolean;
    theme: Theme;
    colors?: "light" | "dark" | "theme"
}

const TextInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.PLACEHOLDER_COLOR
}))<ITextInputProps>`
  opacity: ${({isFocused}) => isFocused ? 1 : .8};
  min-width: 100%;
  padding: 10px 20px;
  background-color: ${({theme}) => theme.TEXT_INPUT_COLOR};
  border: ${({hasError, theme}) => hasError ? '1px solid red' : `1px solid ${theme.TEXT_INPUT_BORDER_COLOR}`}; 
  border-radius: 25px;
  color: ${({theme}) => theme.TEXT_COLOR};
`

export default TextInput;