import React from 'react'
import Card from '../components/Card'
import ProjectList from '../components/List/ProjectList'
import sortAlgorithmPhoto from '../assets/sortalgorithmvisualizercover.jpg'
import islandTradePhoto from '../assets/islandtradesimcover.jpg'
import socialMediaPhoto from '../assets/socialmediademo1.png'
import emailWebAppPhoto from '../assets/emailwebappcover.jpg'
import networkMessengerPhoto from '../assets/networkmessengercover.png'
import mnistPhoto from '../assets/mnistcover.png'
import survivalPhoto from '../assets/castleDefenseCover.jpg'
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
                youtubeLink={"https://www.youtube.com/watch?v=i3q6OD1Iato&t=26s"}
                githubLink={"https://github.com/theoskille/SortAlgorithmVisualizer"}
            />
            <Card
                title="Random Island Generator/Trade Simulation"
                date="07/11/2020"
                description="A simulation program I wrote in java that basically generates a random world and then simulates an economy within it. A series of islands are generated in an ocean using Perlin noise and..."
                actions={buttons}
                animationDuration="1s"
                coverPhoto={islandTradePhoto}
                youtubeLink={"https://www.youtube.com/watch?v=a0qbXAondJY"}
                githubLink={"https://github.com/theoskille/Island-Generator"}
            />
            <Card
                title="Social Media Site"
                date="08/23/2020"
                description="A full-stack web application made with React, Nodejs, and Firebase.  React-Redux was used to control a global state. The app works kind of like a twitter clone. You can sign up for an ..."
                actions={buttons}
                animationDuration="1.5s"
                coverPhoto={socialMediaPhoto}
                youtubeLink={"https://youtu.be/VkEQ0mNiVMo"}
            />
            <Card
                title="Email Web Application"
                date="11/29/2020"
                description="This is a full stack email web application built using React, Nodejs, and Postgress. You can create an account and send emails to other users of the app"
                actions={buttons}
                animationDuration="2s"
                coverPhoto={emailWebAppPhoto}
                youtubeLink={"https://www.youtube.com/watch?v=tLDmeBJVIiQ"}
            />
            <Card
                title="Network Messenger"
                date="04/07/2019"
                description="A basic messenger program with a server and a client. You can run the server from a local host and send messages from one client to the other. Written in Java."
                actions={buttons}
                animationDuration="2.5s"
                coverPhoto={networkMessengerPhoto}
                githubLink={"https://github.com/theoskille/network-messenger"}
            />
            <Card
                title="Hand Written Digit Recognition (ML)"
                date="06/14/2020"
                description="A neural network I implemented from scratch in Python. I used the MNIST database for training data. The MNIST database is an enormous collection of handwritten digits and labels that was created for machine learning. "
                actions={buttons}
                animationDuration="3s"
                coverPhoto={mnistPhoto}
            />
            <Card
                title="Round-based Survival Game"
                date="07/24/2018"
                description="A round-based arcade game where you have to fight off rounds of enemies. As of right now, there are 2 different enemy types. The player levels up as they kill enemies and can use skill points gained from leveling up to increase their stats. The player has a bunch of stats that can affect the play style and feel of their character.  Written in Java."
                actions={buttons}
                animationDuration="3.5s"
                coverPhoto={survivalPhoto}
                githubLink={"https://github.com/theoskille/CastleDefense"}
                youtubeLink={"https://www.youtube.com/watch?v=fTkc3um6-LY&feature=youtu.be"}
            />
        </ProjectList>
    )
}

export default Projects
