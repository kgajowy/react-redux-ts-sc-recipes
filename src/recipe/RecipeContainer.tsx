import React, {FunctionComponent, useEffect} from 'react'
import {connect} from 'react-redux'
import {editRecipe, fetchRecipes} from '../actions/recipes.actions'
import {Recipe as RecipeType} from '../interfaces/recipe'
import {AppThunkDispatch} from '../interfaces/thunk'
import {RootState} from '../reducers'
import Recipe from './Recipe'

interface StateProps {
    recipes: RecipeType[]
}

interface DispatchProps {
    fetch: () => any
    edit: (recipe: RecipeType) => any
}

const RecipeContainer: FunctionComponent<StateProps & DispatchProps> = ({recipes, fetch, edit}) => {
    useEffect(() => {
        async function trigger() {
            await fetch()
        }
        trigger()
    }, [])
    return (
        <div>
            <h1>Collection of Recipes:</h1>
            {
                recipes.map(r => <Recipe key={r.id} recipe={r} onChange={edit}/>)
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
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)
