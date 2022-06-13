import { useNavigation } from '@react-navigation/native';
import { ResizeMode } from 'expo-av';
import React, { useEffect, useRef } from "react";
import { Container, VideoStyled } from './styles';

interface IProps {

}

const VideoPlayer = () => {

    const navigation = useNavigation();
    const video = useRef(null);

    useEffect(() => {
        navigation.addListener('blur', () => video.current.pauseAsync())
    }, [])

    return (
        <Container>
            <VideoStyled
                ref={video}
                source={{
                    url: 'https://youtu.be/zWh3CShX_do',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
            />
        </Container>
    );
}

export default VideoPlayer;

// AIzaSyC6S93JqAWIsq1U6Pevf6SJpsQ-_f_Z1Lc