import styled from "styled-components/native";
import { Theme } from "../../redux/reducers/themeReducer/types";

interface IContainerProps {
    theme: Theme
}

const Container = styled.SafeAreaView<IContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.BACKGROUND_COLOR};
`

export default Container
