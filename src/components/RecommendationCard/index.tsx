import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { recommendationStatuses } from "../../constants/enums";
import IoniconsSelector from "../../utils/IoniconsSelector";
import { useTheme } from "../../hooks/useTheme";
import { RootStackParamList } from "../../navigators/RootStackNavigator";
import { RecommendationsItem } from "../../redux/reducers/recomendationsReducer/types";
import ListItemWrapper from "../_common/_styles/ListItemWrapper.styled";
import { ExecutionTime, RecommendationText, Status, StatusText, Title, TitleText, } from "./styles";


interface IProps {
    recommendationData: RecommendationsItem,
    touchable?: boolean,
    navigateOnClick?: boolean,
    textLines?: number,
}

const RecommendationCard: React.FC<IProps> =
    ({
         recommendationData: {
             recommendationText,
             id,
             status,
             title,
             executionTime
         },
        textLines = 3,
        navigateOnClick = true,
        touchable = true
     }) => {

        const [theme] = useTheme()
        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

        const isInProcess = (status === recommendationStatuses.IN_PROCESS)

        const onHandlePress = () => {
            navigation.navigate("RecommendationDetails")
        }

        return (
            <ListItemWrapper touchable={touchable} onPress={navigateOnClick ? onHandlePress : undefined}>
                <Title>
                    <TitleText>{title}</TitleText>
                    <Status>
                        <StatusText color={isInProcess ? theme.IN_PROCESS_COLOR : theme.DONE_COLOR}>
                            {isInProcess ? "В процессе" : "Готово"}
                        </StatusText>
                        <IoniconsSelector
                            color={isInProcess ? theme.IN_PROCESS_COLOR : theme.DONE_COLOR}
                            iconName={isInProcess ? "ios-time" : "ios-time"}
                        />
                    </Status>
                </Title>
                <ExecutionTime>{`Выполнить до ${executionTime}`}</ExecutionTime>
                <RecommendationText numberOfLines={textLines} >{recommendationText}</RecommendationText>
            </ListItemWrapper>
        )
    }

export default RecommendationCard;