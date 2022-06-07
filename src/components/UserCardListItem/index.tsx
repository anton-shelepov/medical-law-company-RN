import React from "react";
import TransparentButton from "../_common/buttons/TransparentButton";
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
                <TransparentButton title="ОТКРЫТЬ ЧАТ" onPress={() => <></>} />
                <TransparentButton title="НАЗНАЧИТЬ РЕКОМЕНДАЦИЮ" onPress={() => <></>} />
                <TransparentButton title="ОТКРЕПИТЬ" onPress={() => <></>} />
            </ContainerBottom>
        </ListItemWrapper>
    )
}

export default UserCardListItem;