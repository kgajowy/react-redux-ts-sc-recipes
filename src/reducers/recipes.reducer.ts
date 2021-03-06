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
        case ActionTypes.DeleteRecipe:
            return {...state, recipes: state.recipes.filter(r => r.id !== action.payload.id)}
        case ActionTypes.AddRecipe:
            return {...state, recipes: [action.payload, ...state.recipes]}
        case ActionTypes.SaveRecipe: {
            const i = state.recipes.findIndex(r => r.id === action.payload.id)
            return {
                ...state, recipes: state.recipes.map((r, idx) => idx === i ? action.payload : r)
            }
        }
        default:
            return state
    }
}

export default recipesReducer
