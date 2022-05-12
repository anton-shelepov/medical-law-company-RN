import styled from "styled-components/native";
import UserImage from "../_common/_styles/UserImage.styled";

export const HeaderUserImage = styled(UserImage)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`

export const ChatName = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
`

export const UserName = styled.Text`
  color: #ffffff;
  opacity: .9;
`