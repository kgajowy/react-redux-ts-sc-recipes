import React from 'react'
import styled from 'styled-components'
import {Input} from '../components/input/Input'
import Ingredient from '../ingredient/Ingredient'
import {NewIngredient} from '../ingredient/NewIngredient'
import {Ingredient as IngredientType} from '../interfaces/ingredient'
import {Recipe as RecipeProps} from '../interfaces/recipe'
import {uniq, uniqueId} from 'lodash-es'

interface Props {
    recipe: RecipeProps
    onChange: (recipe: RecipeProps) => any
    removeElement?: React.ReactNode
}

const Recipe: React.FunctionComponent<Props> = ({onChange, recipe, removeElement}) => {
    const ingredientChange = (ingredient: IngredientType) => {
        onChange(recipe)
    }
    const ingredientAdded = (ingredient: IngredientType) => {
        recipe.ingredients.push(ingredient)
        onChange(recipe)
    }
    const onSubmit = (value: string) => {
        recipe.name = value
        onChange(recipe)
    }

    return (
        <div>
            <Input onSubmit={onSubmit} defaultValue={recipe.name} autoSave/>{removeElement}
            <List>
                <NewIngredient add={ingredientAdded}/>
                {recipe.ingredients.map((ing) =>
                    <Ingredient key={uniqueId(ing.name)} ingredient={ing} onChange={ingredientChange}/>)}
            </List>
        </div>
    )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 30px 30px;
`

export default Recipe

// TODO replace Ingredient Input with SuperInput
// TODO replace all inputs with InputUi (move useXXX from Recipe to InputUi)
// TODO add ingredient removal button
// TODO styling !
// TODO RWD
