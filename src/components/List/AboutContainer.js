import styled, {keyframes} from 'styled-components'


const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`

const AboutContainer = styled.div`
    position: relative;
    top: 50px;
    margin: 50px;
    display: flex;
    animation: ${slideFromLeft} 1s cubic-bezier(.42,0,.84,1.37);
    justify-content: center;

    @media screen and (max-width: 786px) {
      display: inline;
    }
`
export default AboutContainer