import React from 'react'
import styled, {keyframes} from 'styled-components'

const Circle = styled.div`
  background: ${props => props.color};
  color: #fff;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 5px;
`

const SkillCircle = ({name, color}) => {
    return (
        <div>
            <Circle color={color}>{name}</Circle>
        </div>
    )
}

export default SkillCircle
