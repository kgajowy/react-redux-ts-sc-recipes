import {ThunkDispatch} from 'redux-thunk'
import {Recipe} from '../interfaces/recipe'
import {ThunkResult} from '../interfaces/thunk'
import {RootState} from '../reducers'
import {getRecipes, removeRecipe, submitRecipe, updateRecipe} from '../services/recipe.service'
import {
    ActionErrorType,
    ActionSuccessType,
    ActionTypes,
    AddRecipe,
    DeleteRecipe,
    ErrorAction,
    GetRecipesOk,
    RecipeActions,
    SaveRecipe,
    SuccessAction
} from './action-types'

const recipesFetched = (payload: Recipe[]): GetRecipesOk => ({
    type: ActionTypes.GetRecipesOk,
    payload
})

const recipeAdded = (payload: Recipe): AddRecipe => ({
    type: ActionTypes.AddRecipe,
    payload,
})

const recipeSaved = (payload: Recipe): SaveRecipe => ({
    type: ActionTypes.SaveRecipe,
    payload,
})

const recipeDeleted = (payload: Recipe): DeleteRecipe => ({
    type: ActionTypes.DeleteRecipe,
    payload,
})

const success = (type: ActionSuccessType, payload: string): SuccessAction => ({
    type, payload
})

const error = (type: ActionErrorType, payload: Error): ErrorAction => ({
    type, payload,
})

export const fetchRecipes = (): ThunkResult<Promise<RecipeActions>> => (
    (dispatch: ThunkDispatch<RootState, {}, RecipeActions>) => (
        getRecipes()
            .then(r => dispatch(recipesFetched(r)))
            .catch(() => dispatch(error(ActionTypes.GetRecipesError, new Error('Could not get the recipes.'))))
    )
)

export const editRecipe = (recipe: Recipe): ThunkResult<Promise<RecipeActions>> => (
    (dispatch: ThunkDispatch<RootState, {}, RecipeActions>, getState) => {
        const recipes = getState().recipes.recipes
        return updateRecipe(recipes, recipe)
            .then(() => dispatch(recipeSaved(recipe)))
            .then(() => dispatch(success(ActionTypes.SaveRecipeOk, 'Recipe saved.')))
            .catch(() => dispatch(error(ActionTypes.SaveRecipeError, new Error('Could not save the recipe.'))))
    }
)

export const addRecipe = (recipe: Recipe): ThunkResult<Promise<RecipeActions>> => (
    (dispatch: ThunkDispatch<RootState, {}, RecipeActions>, getState) => {
        const recipes = getState().recipes.recipes
        return submitRecipe(recipes, recipe)
            .then(r => dispatch(recipeAdded(r)))
            .then(() => dispatch(success(ActionTypes.AddRecipeOk, 'Recipe added.')))
            .catch(() => dispatch(error(ActionTypes.SaveRecipeError, new Error('Could not save the recipe.'))))
    }
)

export const deleteRecipe = (recipe: Recipe): ThunkResult<Promise<RecipeActions>> => (
    (dispatch: ThunkDispatch<RootState, {}, RecipeActions>, getState) => {
        const recipes = getState().recipes.recipes
        return removeRecipe(recipes, recipe)
            .then(() => dispatch(recipeDeleted(recipe)))
            .then(() => dispatch(success(ActionTypes.DeleteRecipeOk, 'Recipe removed.')))
            .catch(() => dispatch(error(ActionTypes.DeleteRecipeError, new Error('Could not remove the recipe.'))))
    }
)
