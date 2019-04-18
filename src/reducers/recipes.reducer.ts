import {RecipeActions} from '../actions/action-types'
import {Recipe} from '../interfaces/recipe'

export interface RecipesState {
    recipes: Array<Recipe>
    pending: boolean
    error?: Error
}

export const defaultState: RecipesState = {
    recipes: [{
        id: 0,
        name: 'pomidorowa',
        ingredients: [{
            name: 'pomidory',
            required: true,
            id: 0,
        }, {
            name: 'pieprz',
            id: 1,
        }]
    }, {
        id: 1,
        name: 'Drugie Danie Prawdziwego Polaka',
        ingredients: [{
            name: 'schabowy',
            required: true,
            id: 2,
        }, {
            name: 'ziemniaki',
            required: true,
            id: 3,
        }]
    }],
    pending: false,
}

const recipesReducer = (state: RecipesState = defaultState, action: RecipeActions): RecipesState => {
    switch (action.type) {
        default:
            return state
    }
}

export default recipesReducer
