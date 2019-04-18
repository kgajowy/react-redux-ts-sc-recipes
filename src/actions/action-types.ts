import {Action} from 'redux'
import {Recipe} from '../interfaces/recipe'

export enum ActionTypes {
    GetRecipes = 'GetRecipes',
    GetRecipesOk = 'GetRecipesOk',
    GetRecipesError = 'GetRecipesError',
    AddRecipe = 'AddRecipe',
    AddRecipeOk = 'AddRecipeOk',
    AddRecipeError = 'AddRecipeError',
    SaveRecipe = 'SaveRecipe',
    SaveRecipeOk = 'SaveRecipeOk',
    SaveRecipeError = 'SaveRecipeError',
    DeleteRecipe = 'DeleteRecipe',
    DeleteRecipeOk = 'DeleteRecipeOk',
    DeleteRecipeError = 'DeleteRecipeError',
}

export interface GetRecipes extends Action {
    type: typeof ActionTypes.GetRecipes
}

export interface GetRecipesOk extends Action {
    type: typeof ActionTypes.GetRecipesOk
    payload: Recipe[]
}

export interface SaveRecipe extends Action {
    type: typeof ActionTypes.SaveRecipe,
    payload: Recipe
}

export interface AddRecipe extends Action {
    type: typeof ActionTypes.AddRecipe,
    payload: Recipe
}

export interface DeleteRecipe extends Action {
    type: typeof ActionTypes.DeleteRecipe
    payload: Recipe
}

export interface SuccessAction extends Action {
    type: ActionSuccessType
    payload: string
}

export interface ErrorAction extends Action {
    type: ActionErrorType
    payload: Error
}

export type ActionErrorType =
    | ActionTypes.GetRecipesError
    | ActionTypes.SaveRecipeError
    | ActionTypes.DeleteRecipeError
    | ActionTypes.AddRecipeError

export type ActionSuccessType =
    | typeof ActionTypes.SaveRecipeOk
    | typeof ActionTypes.DeleteRecipeOk
    | typeof ActionTypes.AddRecipeOk

export type RecipeActions =
    | GetRecipes
    | GetRecipesOk
    | SaveRecipe
    | AddRecipe
    | DeleteRecipe
    | SuccessAction
    | ErrorAction

export type NotificationActions =
    | SuccessAction
    | ErrorAction
