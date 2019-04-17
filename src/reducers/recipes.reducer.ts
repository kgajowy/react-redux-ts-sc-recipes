import {ActionTypes, UsersActions} from '../actions/action-types'
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

const recipesReducer = (state: RecipesState = defaultState, action: UsersActions): RecipesState => {
    switch (action.type) {
        case ActionTypes.FetchUsers:
            return {...state, pending: true, error: undefined}
        case ActionTypes.FetchUsersOk:
            return {...state, pending: false, recipes: action.payload}
        case ActionTypes.FetchUsersError:
            return {...state, pending: false, error: action.payload}
        default:
            return state
    }
}

export default recipesReducer
