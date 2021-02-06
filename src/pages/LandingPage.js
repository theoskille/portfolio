import React from 'react'
import AnimatedBackground from '../components/animatedBackground'
import styles from '../components/animatedBackground/animatedBackground.module.css'
import StyledBeginButton from '../components/styledText/StyledBeginButton'
import StyledLandingPageIntro from '../components/styledText/StyledLandingPageIntro'
import StyledLandingPageHeader from '../components/styledText/styledLandingPageText'

const center={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const LandingPage = () => {
    return (
        <div className={styles.area} height="100%">
            <AnimatedBackground/>
            <StyledLandingPageHeader>Welcome!</StyledLandingPageHeader>
            <StyledLandingPageIntro>Explore Theo's Portfolio</StyledLandingPageIntro>
            <div style={center}>
                <StyledBeginButton to="/about">Begin</StyledBeginButton>
            </div>
        </div>
    )
}

export default LandingPage
