import styled from "styled-components/native";
import { Theme } from "../../../redux/reducers/themeReducer/types";


interface IWrapperProps {
  theme: Theme,
  direction?: 'row' | "column"
  touchable?: boolean
}

const ListItemWrapper = styled.TouchableOpacity.attrs(({ touchable = true }) => ({
  activeOpacity: .7,
  disabled: !touchable,
})) <IWrapperProps>`
  min-width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.CARD_BACKGROUND_COLOR};
  border-bottom-color: ${({ theme }) => theme.CARD_BORDER_COLOR};
  border-bottom-width: 1px;
  flex-direction: ${({ direction = 'column' }) => direction};
`

export default ListItemWrapper;