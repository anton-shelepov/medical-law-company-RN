import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import IoniconsSelector from "../common/utils/IoniconsSelector";
import { useTheme } from "../hooks/useTheme";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { RecommendationsItem, RecommendationStatuses } from "../redux/reducers/recomendationsReducer/types.d";
import {
    ExecutionTime,
    RecommendationText,
    Status,
    StatusText,
    Title,
    TitleText,
} from "./styles/RecommendationListCard.styled";
import ListItemWrapper from "./styles/common/ListItemWrapper.styled";

interface IProps {
    recommendationData: RecommendationsItem
}

const RecommendationListCard: React.FC<IProps> =
    ({
         recommendationData: {
             recommendationText,
             id,
             status,
             title,
             executionTime
         }
     }) => {

        const [theme] = useTheme()
        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

        const isInProcess = (status === RecommendationStatuses.IN_PROCESS)

        const onHandlePress = () => {
            navigation.navigate("RecommendationDetails")
        }

        return (
            <ListItemWrapper onPress={onHandlePress}>
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
                <RecommendationText>{recommendationText}</RecommendationText>
            </ListItemWrapper>
        )
    }

export default RecommendationListCard;