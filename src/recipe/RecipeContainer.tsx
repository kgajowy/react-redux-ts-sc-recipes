import React, {FunctionComponent, useEffect} from 'react'
import {connect} from 'react-redux'
import {addRecipe, deleteRecipe, editRecipe, fetchRecipes} from '../actions/recipes.actions'
import {Recipe as RecipeType} from '../interfaces/recipe'
import {AppThunkDispatch} from '../interfaces/thunk'
import {RootState} from '../reducers'
import {NewRecipe} from './NewRecipe'
import {Recipes} from './Recipes'

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
        <>
            <h1>New Recipe:</h1>
            <NewRecipe add={add}/>
            <h1>Collection of Recipes:</h1>
            <Recipes edit={edit} remove={remove} recipes={recipes}/>
        </>
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
