import {ThunkDispatch} from 'redux-thunk'
import {Recipe} from '../interfaces/recipe'
import {ThunkResult} from '../interfaces/thunk'
import {RootState} from '../reducers'
import {getRecipes, storeRecipes} from '../services/recipe.service'
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
        // a coincidence makes it that edit/save action and code in reducer are very similar
        // normally, API call makes those different and there is no need to care about DRY we created there
        // thus, we could optimise it for calling `recipeAdded` with all recipes to just replace them within reducer
        // as we have IDs, key=... is fine. However, not doing that for demonstration purposes and possibility to
        // replace localStorage with different Strategy
        // TODO consider moving this logic into Service to keep implementation details hidden from our flow
        const recipes = getState().recipes.recipes
        const target = recipes.findIndex(r => r.id === recipe.id)
        if (target === -1) {
            dispatch(error(ActionTypes.SaveRecipeError, new Error('Recipe not found.')))
        } else {
            recipes[target] = recipe
        }
        return storeRecipes(recipes)
            .then(() => dispatch(success(ActionTypes.SaveRecipeOk, 'Recipe saved.')))
            .then(() => dispatch(recipeSaved(recipe)))
            .catch(() => dispatch(error(ActionTypes.SaveRecipeError, new Error('Could not save the recipe.'))))
    }
)

export const addRecipe = (recipe: Recipe): ThunkResult<Promise<RecipeActions>> => (
    (dispatch: ThunkDispatch<RootState, {}, RecipeActions>, getState) => {
        const recipes = getState().recipes.recipes
        return storeRecipes([...recipes, recipe])
            .then(() => dispatch(success(ActionTypes.AddRecipeOk, 'Recipe added.')))
            .then(() => dispatch(recipeAdded(recipe)))
            .catch(() => dispatch(error(ActionTypes.SaveRecipeError, new Error('Could not save the recipe.'))))
    }
)
