import * as React from 'react'
import {Input} from '../components/input/Input'
import {Ingredient} from '../interfaces/ingredient'

interface Props {
    add: (ingredient: Ingredient) => any
}

export const NewIngredient: React.FunctionComponent<Props> = ({add}) => <Input
    onSubmit={(name: string) => add({name} as Ingredient)}/>

