import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RecommendationStatuses } from "../../constants/enums";
import { useTheme } from "../../hooks/useTheme";
import { RootStackParamList } from "../../navigators/RootStackNavigator";
import { RecommendationItem } from "../../redux/reducers/recommendationsReducer/types";
import IoniconsSelector from "../../utils/IoniconsSelector";
import ListItemWrapper from "../_common/_styles/ListItemWrapper.styled";
import { ExecutionTime, RecommendationText, Status, StatusText, Title, TitleText } from "./styles";


interface IProps {
    recommendationData: RecommendationItem,
    touchable?: boolean,
    navigateOnClick?: boolean,
    textLines?: number,
}

const RecommendationCard: React.FC<IProps> =
    ({
        recommendationData: {
            description,
            executionDate,
            name,
            status,
            id
        },
        textLines = 3,
        navigateOnClick = true,
        touchable = true
    }) => {

        const [theme] = useTheme()
        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

        const isInProcess = (status === RecommendationStatuses.IN_PROCESS)

        const onHandlePress = () => {
            navigation.navigate("RecommendationDetails", { recommendationId: id })
        }

        return (
            <ListItemWrapper touchable={touchable} onPress={navigateOnClick ? onHandlePress : undefined}>
                <Title>
                    <TitleText>{name}</TitleText>
                    <Status>
                        <StatusText color={isInProcess ? theme.IN_PROCESS_COLOR : theme.DONE_COLOR}>
                            {isInProcess ? "В процессе" : "Выполнено"}
                        </StatusText>
                        <IoniconsSelector
                            color={isInProcess ? theme.IN_PROCESS_COLOR : theme.DONE_COLOR}
                            iconName={isInProcess ? "ios-time" : "checkmark-circle"}
                        />
                    </Status>
                </Title>
                <ExecutionTime>{`Выполнить до ${executionDate}`}</ExecutionTime>
                <RecommendationText numberOfLines={textLines} >{description}</RecommendationText>
            </ListItemWrapper>
        )
    }

export default RecommendationCard;