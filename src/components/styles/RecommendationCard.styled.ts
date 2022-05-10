import styled from "styled-components/native";
import Text from "./common/Text.styled";
import { Theme } from "../../redux/reducers/themeReducer/types";

interface IWrapperProps {
    theme: Theme
}

interface IStatusTextProps {
    color: string,
}

export const Wrapper = styled.TouchableOpacity.attrs({
    activeOpacity: .7
})<IWrapperProps>`
  width: 100%;
  padding: 20px 15px;
  background-color: ${({theme}) => theme.CARD_BACKGROUND_COLOR};
  border-bottom-color: ${({theme}) => theme.CARD_BORDER_COLOR};
  border-bottom-width: 1px;
`

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const TitleText = styled(Text)`
  font-size: 18px;
  margin-bottom: 5px;
`

export const ExecutionTime = styled(Text)`
  opacity: .6;
  margin-bottom: 15px;
`

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`

export const StatusText = styled(Text)<IStatusTextProps>`
  margin-right: 5px;
  font-size: 16px;
  color: ${({color}) => color}
`

export const MessageText = styled(Text)`
  
`