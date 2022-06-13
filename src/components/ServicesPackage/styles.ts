import styled from "styled-components/native";
import globalStyles from "../../styles/globalStyles";
import CardContainer from "../_common/_styles/CardContainer.styled";
import Text from "../_common/_styles/Text.styled";

export const Container = styled(CardContainer)`
padding-top: 25px;
`

export const PackageText = styled(Text)`
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 21px;
  font-weight: 400;
`

export const PackageName = styled(PackageText)`
  color: ${globalStyles.RED_COLOR_TONE};
  font-weight: 700;
  font-style: italic;
  font-size: 28px;
`