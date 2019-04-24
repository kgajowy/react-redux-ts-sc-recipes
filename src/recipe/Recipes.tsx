import React from 'react'
import styled from 'styled-components'
import {Remove} from '../components/remove/Remove'
import {Recipe as RecipeType} from '../interfaces/recipe'
import {media} from '../utils/media'
import Recipe from './Recipe'

interface Props {
    recipes: RecipeType[]
    edit: (recipe: RecipeType) => any
    remove: (recipe: RecipeType) => any
}

export const Recipes: React.FunctionComponent<Props> = ({recipes, edit, remove}) => (
    <Grid>
        {
            recipes.map(r =>
                <Recipe key={r.id}
                        recipe={r}
                        onChange={edit}
                        removeElement={<Remove onClick={() => remove(r)}/>}/>
            )
        }
    </Grid>
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 310px);
  grid-gap: 30px;
  justify-content: center;
`
