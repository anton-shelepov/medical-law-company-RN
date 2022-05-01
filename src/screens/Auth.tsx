import React from "react";
import styled from "styled-components";
import {darkTheme} from "../common/styles/themes";
import logo from "../../assets/images/logo.png";

const Auth: React.FC = () => {
    return (
        <Container>
            <Logo/>
        </Container>
    )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${darkTheme.BACKGROUND_COLOR};
`

const Logo = styled.Image.attrs({
    source: logo,
})`
  width: 200px;
  height: 68px;
`


export default Auth;