import React from "react";
import {
    MessageText,
    ExecutionTime,
    Status,
    StatusText,
    Title,
    TitleText,
    Wrapper
} from "./styles/RecommendationCard.styled";
import IoniconsSelector from "../common/utils/IoniconsSelector";
import { useTheme } from "../hooks/useTheme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";


const RecommendationCard: React.FC = () => {

    const [theme] = useTheme()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const onHandlePress = () => {
        navigation.navigate("RecommendationDetails")
    }

    return (
        <Wrapper onPress={onHandlePress}>
            <Title>
                <TitleText>Кардиолог</TitleText>
                <Status>
                    <StatusText color={theme.IN_PROCESS_COLOR}>В процессе</StatusText>
                    <IoniconsSelector
                        color={theme.IN_PROCESS_COLOR}
                        iconName="ios-time"
                    />
                </Status>
            </Title>
            <ExecutionTime>Выполнить до 12.03.2022</ExecutionTime>
            <MessageText>
                Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски
                нагруженная) и репрезентативная (более частная).
            </MessageText>
        </Wrapper>
    )
}

export default RecommendationCard;