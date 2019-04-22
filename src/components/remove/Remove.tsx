import * as React from 'react'
import {HTMLAttributes} from 'react'
import styled from 'styled-components'

export const Remove: React.FunctionComponent<HTMLAttributes<HTMLSpanElement>> = (props) => (
    <Image {...props}>❌</Image>
    /*
     <Image src={deleteIcon} alt={'Remove'} {...props} width={32} height={32}/>
     */
)

const Image = styled.span`
    cursor: pointer;
    padding: 10px;
    vertical-align: super;
`
