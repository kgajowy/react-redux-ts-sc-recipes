import React, {FunctionComponent, useEffect} from 'react'
import {connect} from 'react-redux'
import {addRecipe, deleteRecipe, editRecipe, fetchRecipes} from '../actions/recipes.actions'
import {Remove} from '../components/remove/Remove'
import {Recipe as RecipeType} from '../interfaces/recipe'
import {AppThunkDispatch} from '../interfaces/thunk'
import {RootState} from '../reducers'
import {NewRecipe} from './NewRecipe'
import Recipe from './Recipe'

interface StateProps {
    recipes: RecipeType[]
}

interface DispatchProps {
    fetch: () => any
    add: (recipe: RecipeType) => any
    edit: (recipe: RecipeType) => any
    remove: (recipe: RecipeType) => any
}

const RecipeContainer: FunctionComponent<StateProps & DispatchProps> = ({recipes, fetch, edit, remove, add}) => {
    useEffect(() => {
        async function trigger() {
            await fetch()
        }
        trigger()
    }, [])
    return (
        <div>
            <h1>New Recipe:</h1>
            <NewRecipe add={add}/>
            <h1>Collection of Recipes:</h1>
            {
                recipes.map(r =>
                    <Recipe key={r.id}
                            recipe={r}
                            onChange={edit}
                            removeElement={<Remove onClick={() => remove(r)}/>}/>
                )
            }
        </div>
    )
}

const mapStateToProps = ({recipes: {recipes}}: RootState): StateProps => ({
    recipes,
})

const mapDispatchToProps = (dispatch: AppThunkDispatch) => ({
    fetch: () => dispatch(fetchRecipes()),
    edit: (recipe: RecipeType) => dispatch(editRecipe(recipe)),
    add: (recipe: RecipeType) => dispatch(addRecipe(recipe)),
    remove: (recipe: RecipeType) => dispatch(deleteRecipe(recipe)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)
