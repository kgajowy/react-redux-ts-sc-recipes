import React, {FunctionComponent, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchRecipes} from '../actions/recipes.actions'
import {Recipe as RecipeType} from '../interfaces/recipe'
import {AppThunkDispatch} from '../interfaces/thunk'
import {RootState} from '../reducers'
import Recipe from './Recipe'

interface StateProps {
    recipes: RecipeType[]
}

interface DispatchProps {
    fetch: () => any
}

const RecipeContainer: FunctionComponent<StateProps & DispatchProps> = ({recipes, fetch}) => {
    useEffect(fetch, [])
    return (
        <div>
            <h1>Collection of Recipes:</h1>
            {
                recipes.map( r => <Recipe key={r.id} {...r}/>)
            }
        </div>
    )
}

const mapStateToProps = ({recipes: {recipes}}: RootState): StateProps => ({
    recipes,
})

const mapDispatchToProps = (dispatch: AppThunkDispatch) => ({
    fetch: () => dispatch(fetchRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)
