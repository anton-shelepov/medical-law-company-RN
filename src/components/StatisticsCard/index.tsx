import React from "react";
import * as Progress from 'react-native-progress';
import { RecommendationGroups } from "../../constants/enums";
import { useTheme } from "../../hooks/useTheme";
import ActivityIndicatorView from "../ActivityIndicatorView";
import { Container, StatisticsText } from "./styles";


interface IProps {
    statistics: {
        completed: number, total: number
    },
    group: RecommendationGroups,
}

const StatisticsCard: React.FC<IProps> = ({ statistics: { completed, total }, group }) => {

    const [theme] = useTheme()

    const progress = total !== 0 ? completed / total : 0;

    return (
        <Container>
            {total !== null && completed !== null ? (
                <Progress.Circle
                    progress={progress}
                    showsText={true}
                    thickness={5}
                    textStyle={{ fontSize: 14, color: theme.TEXT_COLOR }}
                    formatText={() => `${completed}/${total}`}
                    color='red'
                    borderWidth={0.7}
                    borderColor="#cccccc76"
                    size={85}
                />
            ) : <ActivityIndicatorView />}

            <StatisticsText>
                Рекомендаций {group === RecommendationGroups.DOCTOR ? 'врача' : 'юриста'} выполнено
            </StatisticsText>

        </Container>
    )
}

export default StatisticsCard;