import styled from "styled-components/native";
import { messageTypes } from "../../common/constants/enums";
import { Theme } from "../../redux/reducers/themeReducer/types";
import Text from "../_common/_styles/Text.styled";

interface IMessageContainerProps {
    theme: Theme,
    messageType: messageTypes,
}

export const MessagesWrapper = styled.View`
  margin: 0 0 50px 0;
  flex-direction: column-reverse;
`

export const MessageContainer = styled.View<IMessageContainerProps>`
  position: relative;
  align-self: ${({messageType}) => messageType === messageTypes.FROM ? "flex-start" : "flex-end"};
  padding: 10px 15px 30px 15px;
  width: 80%;
  margin-right: ${({messageType}) => messageType === messageTypes.TO ? "15px" : "0"};
  margin-left: ${({messageType}) => messageType === messageTypes.FROM ? "15px" : "0"};;
  border-radius: 25px;
  background-color: ${({theme, messageType}) =>
          messageType === messageTypes.FROM
                  ? theme.MESSAGE_FROM_BACKGROUND_COLOR
                  : theme.MESSAGE_TO_BACKGROUND_COLOR};
  margin-bottom: 15px;
`

export const SentTime = styled(Text)`
  position: absolute;
  bottom: 10px;
  right: 15px;
  opacity: .5;
  font-size: 12px;
`