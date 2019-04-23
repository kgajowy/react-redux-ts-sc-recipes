import * as React from 'react'
import {Input} from '../components/input/Input'
import {Recipe} from '../interfaces/recipe'

interface Props {
    add: (recipe: Recipe) => any
}

export const NewRecipe: React.FunctionComponent<Props> = ({add}) => <Input
    onSubmit={(name: string) => add({name, ingredients: []} as any as Recipe)} clearAfterSubmit/>

