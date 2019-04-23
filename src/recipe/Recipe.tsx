import debounce from 'lodash-es/debounce'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {InputUi} from '../components'
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
    const [recipeName, changeRecipeName] = useState(recipe.name)
    const recipeRef = useRef(null)
    const memoDebounce = useCallback(debounce(onChange, 2000), [recipeRef])

    useEffect(() => {
        if (recipeName === recipe.name) {   // prevent first trigger after initial render
            return
        }
        recipe.name = recipeName
        memoDebounce(recipe)
    }, [recipeName])

    const localChange = (e: React.ChangeEvent<HTMLInputElement>) => changeRecipeName(e.target.value)

    return (
        <div>
            <Name value={recipeName} onChange={localChange}/>{removeElement}
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
