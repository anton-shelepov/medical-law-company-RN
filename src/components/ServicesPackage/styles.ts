import styled from "styled-components/native";
import Text from "../_common/_styles/Text.styled";
import globalStyles from "../../styles/globalStyles";


export const PackageText = styled(Text)`
  margin-top: 10px;
  font-size: 21px;
  font-weight: 400;
`

export const PackageName = styled(PackageText)`
  color: ${globalStyles.RED_COLOR_TONE};
  font-weight: 700;
  font-style: italic;
  font-size: 23px;
`