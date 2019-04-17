import styled from 'styled-components'

export const Checkbox = styled.input`
  cursor: pointer;
  transition: box-shadow 400ms;
  
  &:checked {
    color: black;
  }
  
  &:hover {
      box-shadow: 0 0 18px 0 rgba(0,0,0,0.75);
  }
`

