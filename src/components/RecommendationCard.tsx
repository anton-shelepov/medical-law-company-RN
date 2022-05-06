import React from "react";
import { Title, TitleText, Wrapper, ExecutionTime, Status, Description } from "./styles/RecommendationCard.styled";

const RecommendationCard: React.FC = () => {
    return (
        <Wrapper>
            <Title>
                <TitleText>Кардиолог</TitleText>
                <Status>В процессе</Status>
            </Title>
            <ExecutionTime>Выполнить до 12.03.2022</ExecutionTime>
            <Description>Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы пре</Description>
        </Wrapper>
    )
}

export default RecommendationCard;