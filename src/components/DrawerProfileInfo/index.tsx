import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import userImagePlaceholder from "../../../assets/images/user-image-placeholder.webp";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootTabParamList } from "../../navigators/RootTabNavigator";
import getPublicImageSrc from "../../scripts/getPublicImageSrc";
import UserImage from "../_common/_styles/UserImage.styled";
import { DrawerContainer, UserName } from "./styles";

const DrawerProfileInfo: React.FC = () => {

    const { fullName, imageURL } = useAppSelector(state => state.user.data)
    const navigation = useNavigation<NativeStackNavigationProp<RootTabParamList>>()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <DrawerContainer>
                <UserImage
                    width="120px"
                    height="120px"
                    source={imageURL ? { uri: getPublicImageSrc(imageURL) } : userImagePlaceholder}
                />
                <UserName>{fullName}</UserName>
            </DrawerContainer>
        </TouchableOpacity>

    )
}

export default DrawerProfileInfo;