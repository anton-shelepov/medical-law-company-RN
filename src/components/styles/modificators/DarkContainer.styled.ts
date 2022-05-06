import styled from "styled-components/native";
import {darkTheme} from "../../../common/styles/themes";
import Container from "../Container.styled";

interface IDarkContainerProps {}

const DarkContainer = styled(Container)<IDarkContainerProps>`
  background-color: ${darkTheme.BACKGROUND_COLOR};
`

export default DarkContainer