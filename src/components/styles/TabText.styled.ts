import styled from "styled-components/native";
import { Theme } from "../../redux/reducers/themeReducer/types";

interface IProps {
    theme: Theme
    focused: boolean
}

const TabText = styled.Text<IProps>`
  font-family: BebasNeue_700;
  color: ${({theme, focused}) => focused ? 'red' : theme.TEXT_COLOR};
  font-size: 19px;
`

export default TabText