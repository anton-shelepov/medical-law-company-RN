import styled from "styled-components/native";
import { Theme } from "../../../redux/reducers/themeReducer/types";

interface IProps {
    theme: Theme
}

const ScrollableContainer = styled.ScrollView<IProps>`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND_COLOR};
`

export default ScrollableContainer;