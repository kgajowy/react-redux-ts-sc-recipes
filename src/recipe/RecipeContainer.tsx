import React, {FunctionComponent, useEffect} from 'react'
import {connect} from 'react-redux'
import {deleteRecipe, editRecipe, fetchRecipes} from '../actions/recipes.actions'
import {Remove} from '../components/remove/Remove'
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
    remove: (recipe: RecipeType) => any
}

const RecipeContainer: FunctionComponent<StateProps & DispatchProps> = ({recipes, fetch, edit, remove}) => {
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
    remove: (recipe: RecipeType) => dispatch(deleteRecipe(recipe)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)
