import styled from "styled-components/native";
import { Theme } from "../../../../redux/reducers/themeReducer/types";

interface IContainerProps {
    theme: Theme
}

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  background-color: ${({theme}) => theme.TAB_BAR_BACKGROUND_COLOR};
`

export const SendMessageBtn = styled.Button`
  width: 50px;
  height: 50px;
`