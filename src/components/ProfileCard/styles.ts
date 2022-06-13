import styled from "styled-components/native";
import Text from "../_common/_styles/Text.styled";
import UserImage from "../_common/_styles/UserImage.styled";


export const ProfileImage = styled(UserImage)`
  margin-top: 10px;
  min-width: 200px;
  min-height: 200px;
  margin-bottom: 15px;
`

export const UserName = styled(Text)`
  font-size: 15px;
  margin-bottom: 10px;
`