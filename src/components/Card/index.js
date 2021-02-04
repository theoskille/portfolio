import React from 'react'
import {Title, Date, Description, ActionButton, StyledContainer, StyledPhoto} from './CardElements'

const Card = ({ title, date, description, actions, animationDuration, coverPhoto }) => {
    return (
        <StyledContainer animationDuration={animationDuration}>
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
