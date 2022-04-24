import React from "react";
import {Text} from "react-native";
import styled from "styled-components";

const Home: React.FC = () => {
    return (
        <Container>
            <Text>Home</Text>
        </Container>
    )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`


export default Home;