import { Theme } from "@react-navigation/native";
import styled from "styled-components/native";

interface IUserImageProps {
    theme: Theme,
    width?: string,
    height?: string,
}

export const UserImage = styled.Image<IUserImageProps>`
  width: ${({width = "55px"}) => width};
  height: ${({height = "55px"}) => height};
  background-color: ${({theme}) => theme.BACKGROUND_COLOR};
  border-radius: 100px;
`
export default UserImage;