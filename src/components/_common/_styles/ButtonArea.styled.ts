import styled from "styled-components/native";

const ButtonArea = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
  border: 1px solid red;
  background-color: red;
  border-radius: 25px;
  padding: 15px;
  align-items: center;
  width: 100%;
`

export default ButtonArea;