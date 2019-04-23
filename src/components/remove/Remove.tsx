import * as React from 'react'
import {HTMLAttributes} from 'react'
import styled from 'styled-components'

export const Remove: React.FunctionComponent<HTMLAttributes<HTMLSpanElement>> = (props) => (
    <Cross {...props}>❌</Cross>
    /*
     <Image src={deleteIcon} alt={'Remove'} {...props} width={32} height={32}/>
     */
)

const Cross = styled.span`
    cursor: pointer;
    padding: 10px;
    vertical-align: super;
    color: transparent;
    text-shadow:  0 0 0 white;
    
    &:hover {
      text-shadow: 0 0 0 red;
    }
`
