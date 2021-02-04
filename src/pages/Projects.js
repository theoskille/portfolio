import React from 'react'
import Card from '../components/Card'
import ProjectList from '../components/List/ProjectList'
import sortAlgorithmPhoto from '../assets/sortalgorithmvisualizercover.jpg'
import islandTradePhoto from '../assets/islandtradesimcover.jpg'
import socialMediaPhoto from '../assets/socialmediademo1.png'
const Projects = () => {
    const buttons = [
        {
        label: '0 Comments',
        },
        {
        label: '242 Likes',
        },
        {
        label: '187288 Views',
        },
    ]
    return (
        <ProjectList>
            <Card
                title="Sorting Algorithm Visualizer"
                date="10/16/2019"
                description="A visualization tool for sorting algorithms that I wrote in Java. It visualizes merge sort, quick sort, heap sort, bubble sort, selection sort, and insertion sort."
                actions={buttons}
                animationDuration=".5s"
                coverPhoto={sortAlgorithmPhoto}
            />
            <Card
                title="Random Island Generator/Trade Simulation"
                date="07/11/2020"
                description="A simulation program I wrote in java that basically generates a random world and then simulates an economy within it. A series of islands are generated in an ocean using Perlin noise and..."
                actions={buttons}
                animationDuration="1s"
                coverPhoto={islandTradePhoto}
            />
            <Card
                title="Social Media Site"
                date="08/23/2020"
                description="A full-stack web application made with React, Nodejs, and Firebase.  React-Redux was used to control a global state. The app works kind of like a twitter clone. You can sign up for an ..."
                actions={buttons}
                animationDuration="1.5s"
                coverPhoto={socialMediaPhoto}
            />
            <Card
                title="Sorting Algorithm Visualizer"
                date="10/16/2019"
                description="A visualization tool for sorting algorithms that I wrote in Java. It visualizes merge sort, quick sort, heap sort, bubble sort, selection sort, and insertion sort."
                actions={buttons}
                animationDuration="2s"
            />
        </ProjectList>
    )
}

export default Projects
