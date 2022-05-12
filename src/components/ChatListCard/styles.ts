import { Theme } from "@react-navigation/native";
import styled from "styled-components/native";
import Text from "../_common/_styles/Text.styled";


export const BlockLeft = styled.View`
  margin-right: 15px;
`

export const BlockRight = styled.View`
  width: 81%;
`

export const ChatName = styled(Text)`
  font-size: 17px;
  font-family: Manrope_600;
`

export const CompanionName = styled(Text)`
  font-size: 15px;
  opacity: .5;
`

export const Message = styled(Text).attrs({
    numberOfLines: 2,
})`
  margin-top: 5px;
`
