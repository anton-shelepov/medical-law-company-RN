import styled from "styled-components/native";
import CardContainer from "../_common/_styles/CardContainer.styled";
import Text from "../_common/_styles/Text.styled";

export const EmployeeIcon = styled.Image`
    width: 100px;
    height: 100px;
    margin-right: 10px;
`

export const Container = styled.View`
    padding: 15px;
`
export const WorkplanCard = styled(CardContainer)`
    border-radius: 25px;
    border: ${({ theme }) => theme.CARD_BORDER_COLOR};
    margin-bottom: 15px;
    flex-direction: row;
`

export const BlockRight = styled.View`
    flex-direction: column;
    flex: 1;
`

export const Title = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    flex-wrap: wrap;
`

export const Description = styled(Text)`
    flex-wrap: wrap;
    font-size: 13px;
`