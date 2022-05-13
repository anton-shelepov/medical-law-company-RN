import styled from "styled-components/native";
import { Theme } from "../../../redux/reducers/themeReducer/types";


interface ICardContainerProps {
    theme: Theme
}

const CardContainer = styled.View<ICardContainerProps>`
  padding: 15px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.CARD_BORDER_COLOR};
  width: 100%;
  background-color: ${({theme}) => theme.CARD_BACKGROUND_COLOR};
`

export default CardContainer;