import styled from "styled-components/native";
import { Theme } from "../../redux/reducers/themeReducer/types";
import globalStyles from "../../styles/globalStyles";


interface IProps {
    theme: Theme
}

export const RecommendationResultContainer = styled.View<IProps>`
  border-left-width: 5px;
  border-left-color: ${() => globalStyles.RED_COLOR_TONE};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.CARD_BORDER_COLOR};
  padding: 15px;
  background-color: ${({theme}) => theme.CARD_BACKGROUND_COLOR};
`
