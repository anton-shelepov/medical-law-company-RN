import { List } from "react-native-paper";
import styled from "styled-components/native";
import { Theme } from "../../../redux/reducers/themeReducer/types";


interface IAccordionProps {
    theme: Theme
}

const Accordion = styled(List.Accordion).attrs(({theme}) => ({
    titleStyle:
        {
            fontFamily: "Manrope_400",
            color: theme.TEXT_COLOR,
        },
    style: {
        backgroundColor: 'white',
    }
}))<IAccordionProps>`
  background-color: ${({theme}) => theme.CARD_BACKGROUND_COLOR};
  border-bottom-color: ${({theme}) => theme.CARD_BORDER_COLOR};
  border-bottom-width: 1px;
`

export default Accordion;

