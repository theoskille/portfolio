import styled, {keyframes} from 'styled-components'


const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`

const ProjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 50px;
`
export default ProjectList