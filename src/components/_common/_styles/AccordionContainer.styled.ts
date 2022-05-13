import { List } from "react-native-paper";
import styled from "styled-components/native";
import { Theme } from "../../../redux/reducers/themeReducer/types";


interface IAccordionContainerProps {
    theme: Theme
}

const AccordionContainer = styled(List.Section).attrs(({theme}) => ({

}))<IAccordionContainerProps>`
  background-color: ${({theme}) => theme.CARD_EXPANDED_BACKGROUND_COLOR};
  margin-top: 0;
  margin-bottom: 0;
`

export default AccordionContainer;