import styled, {keyframes} from 'styled-components'


const slideFromRight = keyframes`
  from {
    transform: translateX(50%);
  }

  to {
    transform: translateX(0);
  }
`

const SkillsContainer = styled.div`
    position: relative;
    top: 200px;
    display: flex;
    animation: ${slideFromRight} 1s cubic-bezier(.42,0,.84,1.37);
    justify-content: space-around;
`
export default SkillsContainer