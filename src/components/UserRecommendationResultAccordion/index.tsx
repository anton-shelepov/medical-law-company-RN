import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { UserRecommendationResult } from "../../redux/reducers/recommendationDetailsReducer/types";
import transformDateToString from "../../scripts/tranformDateToString";
import globalStyles from "../../styles/globalStyles";
import IoniconsSelector from "../../utils/IoniconsSelector";
import Accordion from "../_common/_styles/Accordion.styled";
import AccordionContainer from "../_common/_styles/AccordionContainer.styled";
import AccordionText from "../_common/_styles/AccordionText.styled";

const UserRecommendationResultAccordion: React.FC<UserRecommendationResult> =
    ({
        createdAt,
        resultText,
    }) => {

        const [theme] = useTheme()

        const AccordionTitleLeft = () => (
            <IoniconsSelector iconName={'bookmark'} color={globalStyles.RED_COLOR_TONE} />
        )

        const AccordionTitleRight = ({ isExpanded }) => (
            <IoniconsSelector
                useThemeColor={true}
                iconName={isExpanded ? "chevron-up" : "chevron-down"}
            />
        )

        const resultCreatedDate = transformDateToString(createdAt)

        return (
            <AccordionContainer>
                <Accordion
                    title={`Результат от ${resultCreatedDate}`}
                    right={AccordionTitleRight}
                    left={AccordionTitleLeft}
                >
                    <>
                        <AccordionText title={resultText} />
                    </>
                </Accordion>
            </AccordionContainer >
        )
    }

export default UserRecommendationResultAccordion;