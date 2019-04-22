import {ActionTypes, RecipeActions} from '../actions/action-types'
import {Recipe} from '../interfaces/recipe'

export interface RecipesState {
    recipes: Array<Recipe>
    pending: boolean
    error?: Error
}

export const defaultState: RecipesState = {
    recipes: [],
    pending: false,
}

const recipesReducer = (state: RecipesState = defaultState, action: RecipeActions): RecipesState => {
    switch (action.type) {
        case ActionTypes.GetRecipesOk:
            return {...state, recipes: action.payload}
        default:
            return state
    }
}

export default recipesReducer
