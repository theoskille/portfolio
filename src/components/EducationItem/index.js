import React from 'react'
import {Title, StyledPhoto} from './EducationItemElements'

const EducationItem = ({title, photo}) => {
    return (
        <div>
            <Title>
                <StyledPhoto src={photo}/>
                {title}
            </Title>
        </div>
    )
}

export default EducationItem
