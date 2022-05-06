import styled from "styled-components/native";

interface ITextInputProps {
    isFocused: boolean;
    hasError: boolean;
}

const TextInput = styled.TextInput<ITextInputProps>`
  opacity: ${({isFocused}) => isFocused ? 1 : .8};
  min-width: 90%;
  max-width: 90%;
  padding: 10px 20px;
  background-color: #ffffff;
  border: ${({hasError}) => hasError ? '1px solid red' : '1px solid #808080'}
  border-radius: 25px;
  margin-top: 15px;
`

export default TextInput