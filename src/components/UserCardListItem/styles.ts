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
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 20px;
    flex-direction: row;
    justify-content: space-around;
`

export const RecommendationInfoText = styled(Text)`
  flex-direction: row;
`