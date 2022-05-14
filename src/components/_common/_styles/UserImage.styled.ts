import { Theme } from "@react-navigation/native";
import styled from "styled-components/native";

interface IUserImageProps {
    theme: Theme,
}

export const UserImage = styled.Image<IUserImageProps>`
  width: 55px;
  height: 55px;
  background-color: ${({theme}) => theme.BACKGROUND_COLOR};
  border-radius: 100px;
`
export default UserImage;