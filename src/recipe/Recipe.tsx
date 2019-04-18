import React from 'react'
import styled from 'styled-components'
import Ingredient from '../ingredient/Ingredient'
import {Ingredient as IngredientType} from '../interfaces/ingredient'
import {Recipe as Props} from '../interfaces/recipe'

const Recipe: React.FunctionComponent<Props> = ({ingredients, name}) => {
    const ingredientChange = (ingredient: IngredientType) => {
        console.log(ingredient, `ingredientChange`)
    }

    return (
        <div>
            <h2>{name}</h2>
            <List>
                {ingredients.map((ing) => <Ingredient key={ing.id} ingredient={ing} onChange={ingredientChange}/>)}
            </List>
        </div>
    )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`

export default Recipe

// TODO adding new Ingredient
// TODO add ingredient removal button as standalone component
// TODO add/remove recipe
// TODO RWD
