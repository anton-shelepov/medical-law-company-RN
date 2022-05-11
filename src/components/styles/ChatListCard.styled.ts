import { Theme } from "@react-navigation/native";
import styled from "styled-components/native";
import Text from "./common/Text.styled";

interface IAvatarProps {
    source: string,
    theme: Theme,
}

export const Avatar = styled.Image<IAvatarProps>`
  width: 60px;
  height: 60px;
  background-color: ${({theme}) => theme.BACKGROUND_COLOR};
  border-radius: 50px;
`

export const BlockLeft = styled.View`
  margin-right: 15px;
`

export const BlockRight = styled.View`

`

export const ChatName = styled(Text)`
  
`

export const Author = styled(Text)`
  
`

export const Message = styled(Text)`
  flex-wrap: wrap;
`
