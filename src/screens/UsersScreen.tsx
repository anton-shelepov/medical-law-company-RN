import React from "react";
import { FlatList } from "react-native";
import UserCardListItem from "../components/UserCardListItem";
import Container from "../components/_common/_styles/Container.styled";

const UsersScreen: React.FC = () => {

    return (
        <Container>
            <FlatList
                data={[1, 2, 3]}
                renderItem={() => <UserCardListItem />}
            />
        </Container>
    )
}

export default UsersScreen;