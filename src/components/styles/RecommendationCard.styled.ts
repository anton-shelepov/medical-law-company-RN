import styled from "styled-components/native";
import Text from "./Text.styled";
import { Theme } from "../../redux/reducers/themeReducer/types";

interface IWrapperProps {
    theme: Theme
}

export const Wrapper = styled.View<IWrapperProps>`
  width: 100%;
  padding: 10px;
  background-color: ${({theme}) => theme.CARD_BACKGROUND_COLOR};
`

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const TitleText = styled(Text)`
  
`

export const ExecutionTime = styled(Text)`
  opacity: .6;
`

export const Status = styled(Text)`
  opacity: .6;
`

export const Description = styled(Text)`
  
`