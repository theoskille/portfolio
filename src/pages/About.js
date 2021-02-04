import React from 'react'
import AboutContainer from '../components/List/AboutContainer'
import SkillsContainer from '../components/List/SkillsContainer'
import profile from '../assets/profprofile.jpeg';
import SkillCircle from '../components/SkillCircle'
import EducationContainer from '../components/List/EducationContainer';
import slugEmblem from '../assets/slugEmblem.jpg'
import EducationItem from '../components/EducationItem'
import sacEmblem from '../assets/sacEmblem.png'
const introStyles = {
    margin: '50px'
}
const paragraphStyles = {
    width: '400px'
}
const flex = {
    display: 'flex',
    position: 'relative',
    right: '100px',
    flexWrap: 'wrap',
    width: '400px'
}
const About = () => {
    return (
        <div>
            <AboutContainer>
                <img src={profile}/>
                <div style={introStyles}>
                    <h1>Hello!<br/>I'm Theo</h1>
                    <div style={paragraphStyles}>
                        <p>I’m a computer science major at University of California Santa Cruz. Coding has been a hobby of mine since high school and over the years I have worked on a wide variety of projects ranging from full stack web applications to neural networks for handwritten digit recognition! <br/>I'm passionate about this craft and I am always looking for ways to expand my toolset and hone my skills. <br/>I’m currently looking for an opportunity to gain some real world experience! </p>
                    </div>
                </div>
            </AboutContainer>
            <SkillsContainer>
                <div>
                    <h1>Education</h1>
                    <EducationItem title="University of Califronia Santa Cruz" photo={slugEmblem}/>
                    <EducationItem title="California State University Sacramento" photo={sacEmblem}/>
                </div>
                <div>
                    <h1>Skills</h1>
                    <div style={flex}>
                        <SkillCircle
                            name="Java"
                            color="#f54260"
                        />
                        <SkillCircle
                            name="JavaScript"
                            color="#427bf5"
                        />
                        <SkillCircle
                            name="Html/CSS"
                            color="#dbd82e"
                        />
                        <SkillCircle
                            name="React"
                            color="#55f277"
                        />
                        <SkillCircle
                            name="NodeJS"
                            color="#55f277"
                        />
                        <SkillCircle
                            name="Python"
                            color="#f54260"
                        />
                        <SkillCircle
                            name="C"
                            color="#427bf5"
                        />
                        <SkillCircle
                            name="ASM X86"
                            color="#dbd82e"
                        />
                        <SkillCircle
                            name="Flutter"
                            color="#dbd82e"
                        />
                        <SkillCircle
                            name="Firebase"
                            color="#55f277"
                        />
                        <SkillCircle
                            name="Scrum"
                            color="#f54260"
                        />
                        <SkillCircle
                            name="GML"
                            color="#427bf5"
                        />
                    </div>
                </div>
            </SkillsContainer>
        </div>
    )
}

export default About
