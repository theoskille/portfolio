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

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: translateY(-6px);
  }
`

const SkillCircle = ({name, color}) => {
    return (
        <div>
            <Circle color={color}>{name}</Circle>
        </div>
    )
}

export default SkillCircle
