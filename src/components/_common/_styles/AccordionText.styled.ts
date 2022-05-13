import { List } from "react-native-paper";
import styled from "styled-components/native";
import { Theme } from "../../../redux/reducers/themeReducer/types";


interface IAccordionTextProps {
    theme: Theme
}

const AccordionText = styled(List.Item).attrs(({theme}) => ({
    titleNumberOfLines: 0,
    titleStyle:
        {
            color: theme.TEXT_COLOR,
            fontSize: 14,
            fontWeight: '400',
            fontFamily: "Manrope_400",
        },
}))<IAccordionTextProps>`
  color: ${({theme}) => theme.TEXT_COLOR};
`

export default AccordionText;