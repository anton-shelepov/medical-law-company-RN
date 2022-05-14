import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import darkLogo from "../../../../assets/images/darkLogo.png";
import lightLogo from "../../../../assets/images/lightLogo.png";

interface IProps {
    colorsType?: 'light' | 'dark'
}

const Logo = styled.Image.attrs(({colorsType = "light"}) => ({
    source: colorsType === 'light'
        ? lightLogo as ImageSourcePropType
        : darkLogo as ImageSourcePropType
}))<IProps>`
  width: 200px;
  height: 68px;
`

export default Logo