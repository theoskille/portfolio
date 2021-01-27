import styled from 'styled-components'

export const Title = styled.h2`
  color: #000;
  font-weight: 300;
`
export const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`
export const Description = styled.p`
  color: #000;
  font-weight: 300;
`

export const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
` 

export const StyledContainer = styled.div`
  padding: 40px;
  background: #fff;
  max-width: 350px;
  width: 100%;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
