import React from 'react'
import {Title, Date, Description, YoutubeButton, GithubButton, StyledContainer, StyledPhoto} from './CardElements'
import githubIcon from '../../assets/githubIcon.png'
import youtubeIcon from '../../assets/youtubeIcon.png'

const padding={
    padding: '5px'
}
const flex={
    display: 'flex'
}
const Card = ({ title, date, description, youtubeLink, githubLink, animationDuration, coverPhoto }) => {
    return (
        <StyledContainer animationDuration={animationDuration}>
            <StyledPhoto src={coverPhoto} />
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Description>{description}</Description>
            <div style={flex}>
                {youtubeLink ? <YoutubeButton href={youtubeLink}>
                    <img width="40px" height="40px" src={youtubeIcon}/>
                    Watch Demo
                </YoutubeButton> : null}
                {githubLink ? <GithubButton href={githubLink}>
                    <img width="20px" height="20px" src={githubIcon}/>
                    <div style={padding}>Source Code</div>
                </GithubButton> : null}
            </div>
        </StyledContainer>
    )
}

export default Card
