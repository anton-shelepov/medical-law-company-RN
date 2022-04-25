import React from "react";
import styled from "styled-components";

const Home: React.FC = () => {
    return (
        <Container>

        </Container>
    )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.BACKGROUND_COLOR};
`

export default Home;