import styled from "styled-components/native";
import { Theme } from "../../redux/reducers/themeReducer/types";
import Container from "../_common/_styles/Container.styled";
import Text from "../_common/_styles/Text.styled";

interface IDrawerContainerProps {
    theme: Theme;
}

export const DrawerContainer = styled(Container)<IDrawerContainerProps>`
  background-color: ${({theme}) => theme.CARD_BACKGROUND_COLOR};
  margin-top: -4px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.CARD_BORDER_COLOR};
`

export const UserName = styled(Text).attrs({
})`
  margin-top: 15px;
  font-size: 13px;
`