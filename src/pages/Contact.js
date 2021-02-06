import React from 'react'
import styles from '../components/animatedBackground/animatedBackground.module.css'
import AnimatedBackground from '../components/animatedBackground';
import StyledHeader from '../components/styledText/styledHeader';
import IntroParagraph from '../components/styledText/introParagraph';


const Contact = () => {
    return (
        <div className={styles.area}>
            <StyledHeader>Contact me!</StyledHeader>
            <IntroParagraph>You can reach me using either of these emails:</IntroParagraph>
            <IntroParagraph>theo.skille@gmail.com</IntroParagraph>
            <IntroParagraph>theo.skille.work@gmail.com</IntroParagraph>
            <IntroParagraph>phone number: (707) 266-2997</IntroParagraph>
            <AnimatedBackground/>
        </div>
    )
}

export default Contact
