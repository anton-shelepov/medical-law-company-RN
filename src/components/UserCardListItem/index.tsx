import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import userImagePlaceholder from "../../../assets/images/user-image-placeholder.webp";
import { RootStackParamList } from "../../navigators/RootStackNavigator";
import { UsersListItem } from "../../redux/reducers/usersListReducer/types";
import getPublicImageSrc from "../../scripts/getPublicImageSrc";
import ButtonWithIcon from "../_common/buttons/ButtonWithIcon";
import FilledButton from "../_common/buttons/FilledButton";
import ListItemWrapper from "../_common/_styles/ListItemWrapper.styled";
import UserImage from "../_common/_styles/UserImage.styled";
import { BlockLeft, BlockRight, ContainerBottom, ContainerTop, FullName, PhoneNumber } from "./styles";

interface IProps {
    user: UsersListItem
}

const UserCardListItem: React.FC<IProps> = ({ user: { fullName, id, phoneNumber, imageURL } }) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const onHandleNewRecommendationClick = () => {
        navigation.navigate("RecommendationCreating", { userId: id })
    }

    const onHandleChatClick = () => {
        navigation.navigate("Chat", { id })
    }

    const onHandleRecommendationsClick = () => {
        navigation.navigate("RecommendationsReview", { userId: id })
    }

    return (
        <ListItemWrapper touchable={false}>
            <ContainerTop>
                <BlockLeft>
                    <UserImage
                        width="75px"
                        height="75px"
                        source={imageURL
                            ? { uri: getPublicImageSrc(imageURL) }
                            : userImagePlaceholder
                        }
                    />
                </BlockLeft>
                <BlockRight>
                    <FullName>{fullName}</FullName>
                    <PhoneNumber>{phoneNumber}</PhoneNumber>
                </BlockRight>
            </ContainerTop>
            <ContainerBottom>
                <ButtonWithIcon
                    onPress={onHandleNewRecommendationClick}
                    title="????????????????????????"
                    iconName="add-circle-sharp" />
                <ButtonWithIcon
                    onPress={onHandleChatClick}
                    title="?????????????? ??????"
                    iconName="ios-chatbubbles" />
                <ButtonWithIcon
                    onPress={onHandleRecommendationsClick}
                    title="????????????????????????"
                    iconName="bookmarks" />
            </ContainerBottom>
            <FilledButton title="??????????????????" />
        </ListItemWrapper>
    )
}

export default UserCardListItem;