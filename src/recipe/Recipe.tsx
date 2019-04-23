import React from 'react'
import styled from 'styled-components'
import {InputUi} from '../components'
import {Input} from '../components/input/Input'
import Ingredient from '../ingredient/Ingredient'
import {NewIngredient} from '../ingredient/NewIngredient'
import {Ingredient as IngredientType} from '../interfaces/ingredient'
import {Recipe as RecipeProps} from '../interfaces/recipe'

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
                    <Ingredient key={ing.id} ingredient={ing} onChange={ingredientChange}/>)}
            </List>
        </div>
    )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 30px 30px;
`

const Name = styled(InputUi)`
  font-size: 2rem;
  height: 2.5rem;
  
`

export default Recipe

// TODO add ingredient removal button
// TODO add debounce to InputUi
// TODO add 'Enter' keypress to InputUi
// TODO replace all inputs with InputUi (move useXXX from Recipe to InputUi)
// TODO RWD
