import React from "react";
import ButtonWithIcon from "../_common/buttons/ButtonWithIcon";
import ListItemWrapper from "../_common/_styles/ListItemWrapper.styled";
import UserImage from "../_common/_styles/UserImage.styled";
import { BlockLeft, BlockRight, ContainerBottom, ContainerTop, FullName, PhoneNumber } from "./styles";

const UserCardListItem: React.FC = () => {
    return (
        <ListItemWrapper touchable={false}>
            <ContainerTop>
                <BlockLeft>
                    <UserImage width="65px" height="65px" />
                </BlockLeft>
                <BlockRight>
                    <FullName>Шелепов Антон Константинович</FullName>
                    <PhoneNumber>+79243363378</PhoneNumber>
                </BlockRight>
            </ContainerTop>
            <ContainerBottom>
                <ButtonWithIcon onPress={() => ''} title="Рекомендация" iconName="add-circle-sharp" />
                <ButtonWithIcon title="Чат" iconName="ios-chatbubbles" />
                <ButtonWithIcon title="Открепить" iconName="remove-circle" />
            </ContainerBottom>
        </ListItemWrapper>
    )
}

export default UserCardListItem;