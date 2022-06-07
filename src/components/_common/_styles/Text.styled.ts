import styled from "styled-components/native";
import { Theme } from "../../../redux/reducers/themeReducer/types";

interface IProps {
  theme: Theme,
  fontFamily?: string,
}

const Text = styled.Text<IProps>`
  color: ${({ theme }) => theme.TEXT_COLOR};
  font-family: Manrope_400;
`

export default Text;