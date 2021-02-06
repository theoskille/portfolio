import React from 'react'
import styled, {keyframes} from 'styled-components'

const IntroParagraph = styled.p`
    width: 40%;
    margin: 40px;

    @media screen and (max-width: 786px) {
        width: 90%;
    }
`

export default IntroParagraph