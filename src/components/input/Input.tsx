import {debounce} from 'lodash-es'
import * as React from 'react'
import {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {InputUi} from '../InputUi'

interface Props {
    inputProps?: React.PropsWithoutRef<JSX.IntrinsicElements['input']> //https://github.com/sw-yx/react-typescript-cheatsheet#useful-react-prop-type-examples
    autoSave?: boolean
    clearAfterSubmit?: boolean
    defaultValue?: string
    onSubmit: (value: string) => any
    className?: string
}

export const Input: React.FunctionComponent<Props> = ({onSubmit, defaultValue = '', className, inputProps, clearAfterSubmit = false, autoSave = false}) => {
    const [value, setValue] = useState(defaultValue)
    const submit = (debouncedVal: string = '') => {
        // debounce + useCallback memoizes the value as well
        const validateAgainst = debouncedVal || value
        if (validateAgainst === '') {
            return
        }
        onSubmit(validateAgainst)
        if (clearAfterSubmit) {
            setValue('')
        }
    }

    const inputRef = useRef(null)
    const memoDebounce = useCallback(debounce(submit, 2000), [inputRef])

    useEffect(() => {
        if (!autoSave || value === defaultValue) {   // prevent first trigger after initial render
            return
        }
        memoDebounce(value)
    }, [value, autoSave])

    const localChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    const enterPressed = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            submit()
            memoDebounce.cancel()
        }
    }

    return (
        <Container>
            <InputUi
                {...inputProps}
                onChange={localChange}
                value={value}
                onKeyPress={enterPressed}
                className={className}/>
            {!autoSave && <Plus onClick={() => submit()}>➕</Plus>}
        </Container>
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

const Container = styled.div`
  display: inline;
`
