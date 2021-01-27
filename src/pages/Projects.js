import React from 'react'
import Card from '../components/Card'

const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
};
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
        <div style={listStyle}>
            <Card
                title="Sorting Algorithm Visualizer"
                date="10/16/2019"
                description="A visualization tool for sorting algorithms that I wrote in Java. It visualizes merge sort, quick sort, heap sort, bubble sort, selection sort, and insertion sort."
                actions={buttons}
            />
            <Card
                title="Sorting Algorithm Visualizer"
                date="10/16/2019"
                description="A visualization tool for sorting algorithms that I wrote in Java. It visualizes merge sort, quick sort, heap sort, bubble sort, selection sort, and insertion sort."
                actions={buttons}
            />
            <Card
                title="Sorting Algorithm Visualizer"
                date="10/16/2019"
                description="A visualization tool for sorting algorithms that I wrote in Java. It visualizes merge sort, quick sort, heap sort, bubble sort, selection sort, and insertion sort."
                actions={buttons}
            />
            <Card
                title="Sorting Algorithm Visualizer"
                date="10/16/2019"
                description="A visualization tool for sorting algorithms that I wrote in Java. It visualizes merge sort, quick sort, heap sort, bubble sort, selection sort, and insertion sort."
                actions={buttons}
            />
        </div>
    )
}

export default Projects
