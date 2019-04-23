import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import {InputUi} from '../InputUi'

interface Props {
    onSubmit: (value: string) => any
    className?: string
}

export const Input: React.FunctionComponent<Props> = ({onSubmit, className}) => {
    const [name, setName] = useState('')
    const submit = () => {
        if (name === '') {
            return
        }
        onSubmit(name)
        setName('')
    }
    const enterPressed = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            submit()
        }
    }

    return (
        <div>
            <InputUi onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                     value={name}
                     onKeyPress={enterPressed}
                     className={className}/>
            <Plus onClick={submit}>➕</Plus>
        </div>
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