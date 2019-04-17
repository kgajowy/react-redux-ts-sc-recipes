import styled from 'styled-components'

export const Input = styled.input`
    width: 200px;
    height: 1rem;
    color: #455A64;
    border-radius: 0.4rem;
    padding: 0.3rem 1rem;
    transition: box-shadow 400ms;
    outline: none;
    
    &:hover {
      box-shadow: 0.5rem 0.5rem 1.5rem;
    }
    
    &::placeholder {
      color: #B0BEC5;
    }
`
