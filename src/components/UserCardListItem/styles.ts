import styled from "styled-components/native";
import Text from "../_common/_styles/Text.styled";

export const ContainerTop = styled.View`
  flex-direction: row;
  align-items: center;
`

export const BlockLeft = styled.View`
    margin-right: 20px;
`

export const BlockRight = styled.View`
    
`

export const FullName = styled(Text)`
    margin-bottom: 5px;
`

export const PhoneNumber = styled(Text)`
  opacity: .6;
`

export const ContainerBottom = styled.View`
    margin-top: 15px;
    background-color: ${({ theme }) => theme.CARD_EXPANDED_BACKGROUND_COLOR};
    border-radius: 15px;
    padding: 10px;
`

export const RecommendationInfoText = styled(Text)`
  flex-direction: row;
`