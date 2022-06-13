import React from "react";
import { ImageSourcePropType } from "react-native";
import doctorImage from "../../../assets/images/doctor.png";
import lawyerImage from "../../../assets/images/lawyer.png";
import { BlockRight, Container, Description, EmployeeIcon, Title, WorkplanCard } from "./styles";


const Workplans: React.FC = () => {

    const workplans = [
        {
            type: 'doctor',
            title: 'Здравствуйте, я врач компании ПризываНЕТ',
            description: 'Вместе с Вами мы соберем пакет медицинских документов, доказывающих у вас наличие оснований для получения отсрочки от армии ',
        },
        {
            type: 'lawyer',
            title: 'Здравствуйте, я юрист компании ПризываНЕТ',
            description: 'Я проверю законность и точность формулировки диагноза, а также пресеку превышение полномочий и не дам вас в обиду',
        },
    ]

    return (
        <Container style={{ width: '100%' }}>
            {workplans.map(workplan => (
                <WorkplanCard key={workplan.type}>
                    <EmployeeIcon source={workplan.type === 'doctor'
                        ? doctorImage as ImageSourcePropType
                        : lawyerImage as ImageSourcePropType}
                    />
                    <BlockRight>
                        <Title>{workplan.title}</Title>
                        <Description>{workplan.description}</Description>
                    </BlockRight>
                </WorkplanCard>
            ))}

        </Container>
    )
}

export default Workplans