import styled from "styled-components/native";
import { Theme } from "../../../../redux/reducers/themeReducer/types";

interface IContainerProps {
    theme: Theme
}

interface IMessageTextInputProps {
    theme: Theme
}

export const Container = styled.View.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
})<IContainerProps>`
  bottom: 0;
  width: 100%;
  border: 0.5px solid transparent;
  border-top-color: ${({theme}) => theme.TAB_BAR_BORDER_TOP_COLOR};
  max-height: 100px;
  align-items: center;
  flex-direction: row;
  background-color: ${({theme}) => theme.TAB_BAR_BACKGROUND_COLOR};
  padding: 5px;
`

export const MessageTextInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.PLACEHOLDER_COLOR,
}))<IMessageTextInputProps>`
  color: ${({theme}) => theme.TEXT_COLOR};
  flex: 1;
  min-height: 38px;
`

export const MessageButton = styled.TouchableOpacity`
  margin: 0 15px;
`