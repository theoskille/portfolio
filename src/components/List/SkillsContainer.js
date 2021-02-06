import styled, {keyframes} from 'styled-components'


const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`

const SkillsContainer = styled.div`
    position: relative;
    top: 180px;
    display: flex;
    animation: ${slideFromRight} 1s cubic-bezier(.42,0,.84,1.37);
    width: 400px;
    left: 60%;
    @media screen and (max-width: 786px) {
      width: 100%;
    }
`
export default SkillsContainer