import debounce from 'lodash-es/debounce'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {Input} from '../components'
import {Remove} from '../components/remove/Remove'
import Ingredient from '../ingredient/Ingredient'
import {Ingredient as IngredientType} from '../interfaces/ingredient'
import {Recipe as RecipeProps} from '../interfaces/recipe'

interface Props {
    recipe: RecipeProps
    onChange: (recipe: RecipeProps) => any
    removeElement: React.ReactNode
}

const Recipe: React.FunctionComponent<Props> = ({onChange, recipe, removeElement}) => {
    const ingredientChange = (ingredient: IngredientType) => {
        console.log(ingredient, `ingredientChange`)
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
                {recipe.ingredients.map((ing) =>
                    <Ingredient key={ing.id} ingredient={ing} onChange={ingredientChange}/>)}
            </List>
        </div>
    )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled(Input)`
  font-size: 2rem;
  height: 2.5rem;
  
`

export default Recipe

// TODO add recipe
// TODO adding new Ingredient
// TODO add ingredient removal button as standalone component
// TODO RWD
