import logo from "../../../../assets/images/logo.png";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

const Logo = styled.Image.attrs({
    source: logo as ImageSourcePropType
})`
  width: 200px;
  height: 68px;
`

export default Logo