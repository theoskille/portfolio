import React from 'react'
import styled, {keyframes} from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

const ring = keyframes`
    from {
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    to {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  `

const StyledBeginButton = styled(Link)`
    position: relative;
    font-size: 50px;
    text-align: center;
    min-width: 300px;
    min-height: 60px;
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    color: #313133;
    background: #4FD1C5;
    background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
    border: none;
    border-radius: 1000px;
    box-shadow: 12px 12px 24px rgba(79,209,197,.64);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    padding: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:after {
        content: '';
            width: 30px; height: 30px;
            border-radius: 100%;
            border: 6px solid #00FFCB;
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: ${ring} 1.5s infinite;
    }

    &:hover {
        opacity: 0.8;
        color: #313133;
        transform: translateY(-6px);
    }
    
`

export default StyledBeginButton