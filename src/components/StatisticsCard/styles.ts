import styled from "styled-components/native";
import CardContainer from "../_common/_styles/CardContainer.styled";
import Text from "../_common/_styles/Text.styled";

export const Container = styled(CardContainer)`
    border-radius: 25px;
    flex: 1;
    margin: 5px;
    border: ${({ theme }) => theme.CARD_BORDER_COLOR};
`

export const StatisticsText = styled(Text)`
    margin-top: 15px;
    text-align: center;
`