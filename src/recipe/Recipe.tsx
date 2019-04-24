import {uniqueId} from 'lodash-es'
import React from 'react'
import styled from 'styled-components'
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
    const ingredientChange = () => {
        onChange(recipe)
    }
    const ingredientAdded = (ingredient: IngredientType) => {
        recipe.ingredients.push(ingredient)
        onChange(recipe)
    }
    const ingredientDelete = (ingregient: IngredientType) => {
        recipe.ingredients = recipe.ingredients.filter(i => i.id !== ingregient.id)
        onChange(recipe)
    }

    const onSubmit = (value: string) => {
        recipe.name = value
        onChange(recipe)
    }

    return (
        <div>
            <RecipeNameContainer>
                <Input onSubmit={onSubmit} defaultValue={recipe.name} autoSave/>
                {removeElement}
            </RecipeNameContainer>
            <List>
                <NewIngredient add={ingredientAdded}/>
                {recipe.ingredients.map((ing) =>
                    <Ingredient key={uniqueId(ing.name)}
                                ingredient={ing}
                                onChange={ingredientChange}
                                onDelete={ingredientDelete}
                    />)}
            </List>
        </div>
    )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 30px 30px;
`

const RecipeNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default Recipe

// TODO replace Ingredient Input with SuperInput
// TODO replace all inputs with InputUi (move useXXX from Recipe to InputUi)
// TODO add ingredient removal button
// TODO styling !
// TODO RWD
