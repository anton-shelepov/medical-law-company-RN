import { Video } from 'expo-av';
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.CARD_BACKGROUND_COLOR};
`

export const VideoStyled = styled(Video)`
    align-self: center;
    width: 100%;
    height: 225;
`