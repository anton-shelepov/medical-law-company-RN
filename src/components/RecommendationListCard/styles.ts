import styled from "styled-components/native";
import Text from "../_common/_styles/Text.styled";

interface IStatusTextProps {
    color: string,
}

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const TitleText = styled(Text)`
  font-size: 18px;
  margin-bottom: 5px;
`

export const ExecutionTime = styled(Text)`
  opacity: .6;
  margin-bottom: 15px;
`

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`

export const StatusText = styled(Text)<IStatusTextProps>`
  margin-right: 5px;
  font-size: 16px;
  color: ${({color}) => color}
`

export const RecommendationText = styled(Text).attrs({
    numberOfLines: 3,
})``