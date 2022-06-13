import React, { useEffect, useState } from "react";
import recommendationsAPI from "../../api/recommendations.api";
import { RecommendationGroups, RecommendationStatuses, TokenTypes } from "../../constants/enums";
import useDecodedToken from "../../hooks/useDecodedToken";
import { RecommendationItem } from "../../redux/reducers/recommendationsReducer/types";
import StatisticsCard from "../StatisticsCard";
import { Wrapper } from "./styles";

export type RecommendationsCompletedInfo = {
    [RecommendationGroups.DOCTOR]: {
        total: number,
        completed: number,
    },
    [RecommendationGroups.LAWYER]: {
        total: number,
        completed: number,
    },
}

const initialValues = { completed: null, total: null }


const RecommendationsStatistics: React.FC = () => { // FIXME: Дублирование кода

    const [recommendationsStatuses, setRecommendationsStatuses] =
        useState<RecommendationsCompletedInfo>({
            DOCTOR: initialValues,
            LAWYER: initialValues,
        })

    const user = useDecodedToken(TokenTypes.accessToken);

    useEffect(() => { // TODO: Вынести в redux saga и reducer
        recommendationsAPI.fetchAllUserRecommendations(user.sub).then(response => {

            const recommendations: [{}] = response.data.map((recommendation: RecommendationItem) => ({
                [recommendation.group]: recommendation.status,
            }))

            const doctorInfo = { completed: 0, total: 0 };
            const lawyerInfo = { completed: 0, total: 0 };

            for (let index in recommendations) {

                if (recommendations[index].hasOwnProperty(RecommendationGroups.DOCTOR)) {
                    doctorInfo.total++;
                    if (recommendations[index][RecommendationGroups.DOCTOR] === RecommendationStatuses.DONE) {
                        doctorInfo.completed++;
                    }
                }

                if (recommendations[index].hasOwnProperty(RecommendationGroups.LAWYER)) {
                    lawyerInfo.total++;
                    if (recommendations[index][RecommendationGroups.LAWYER] === RecommendationStatuses.DONE) {
                        lawyerInfo.completed++;
                    }
                }
            }

            setRecommendationsStatuses({
                DOCTOR: doctorInfo,
                LAWYER: lawyerInfo,
            })
        }).catch(() => setRecommendationsStatuses({
            DOCTOR: { completed: 0, total: 0 },
            LAWYER: { completed: 0, total: 0 },
        }))
    }, [])

    return (
        <Wrapper>
            <StatisticsCard
                group={RecommendationGroups.LAWYER}
                statistics={recommendationsStatuses.LAWYER}
            />
            <StatisticsCard
                group={RecommendationGroups.DOCTOR}
                statistics={recommendationsStatuses.DOCTOR}
            />
        </Wrapper>
    )
}

export default RecommendationsStatistics;