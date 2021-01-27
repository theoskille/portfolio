import React from 'react'
import {Title, Date, Description, ActionButton, StyledContainer, StyledPhoto} from './CardElements'
import coverPhoto from '../../assets/sortalgorithmvisualizercover.jpg';
const Card = ({ title, date, description, actions }) => {
    return (
        <StyledContainer>
            <StyledPhoto src={coverPhoto} />
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Description>{description}</Description>
            {actions.map(({ label }) => (
            <ActionButton>{label}</ActionButton>
            ))}
        </StyledContainer>
    )
}

export default Card
