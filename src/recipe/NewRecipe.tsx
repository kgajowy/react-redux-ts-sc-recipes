import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import {Input} from '../components'
import {Recipe} from '../interfaces/recipe'

interface Props {
    add: (recipe: Recipe) => any
}

export const NewRecipe: React.FunctionComponent<Props> = ({add}) => {
    const [name, setName] = useState('')
    const submit = () => {
        if (name === '') {
            return
        }
        add({
            name,
            ingredients: []
        } as unknown as Recipe)
        setName('')
    }
    const enterPressed = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            submit()
        }
    }

    return (
        <>
            <Input onChange={(e) => setName(e.target.value)} value={name} onKeyPress={enterPressed}/>
            <Plus onClick={submit}>➕</Plus>
        </>
    )
}


const Plus = styled.span`
  font-size: 1.3rem;
  color: transparent;
  text-shadow: 0 0 0 white;
  vertical-align: middle;
  padding-left: 10px;
  cursor: pointer;
  
  &:hover {
    text-shadow: 0 0 0 forestgreen;
  }
`
