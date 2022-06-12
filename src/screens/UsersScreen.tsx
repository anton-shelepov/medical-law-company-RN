import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ActivityIndicatorView from "../components/ActivityIndicatorView";
import UserCardListItem from "../components/UserCardListItem";
import Container from "../components/_common/_styles/Container.styled";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { pinnedUsersFetchRequest } from "../redux/reducers/usersListReducer/usersListActions";

const UsersScreen: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pinnedUsersFetchRequest())
    }, [])

    const users = useAppSelector(state => state.usersList)

    if (users.isLoading) {
        return <ActivityIndicatorView />
    }

    return (
        <Container>
            <FlatList
                data={users.data.users}
                renderItem={({ item }) => <UserCardListItem user={item} />}
            />
        </Container>
    )
}

export default UsersScreen;