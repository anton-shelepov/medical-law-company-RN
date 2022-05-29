import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootTabParamList } from "../../navigators/RootTabNavigator";
import { DrawerContainer, UserName } from "./styles";
import UserImage from "../_common/_styles/UserImage.styled";


const DrawerProfileInfo: React.FC = () => {

    const { userImageSrc, userName } = useAppSelector(state => state.profile.profileData)
    const navigation = useNavigation<NativeStackNavigationProp<RootTabParamList>>()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <DrawerContainer>
                <UserImage
                    width="80px"
                    height="80px"
                    source={{ uri: userImageSrc }}
                />
                <UserName>{userName}</UserName>
            </DrawerContainer>
        </TouchableOpacity>

    )
}

export default DrawerProfileInfo;