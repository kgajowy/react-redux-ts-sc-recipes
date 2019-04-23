import {Recipe} from '../interfaces/recipe'

const RECIPES_KEY = 'recipes'

export const getRecipes = (): Promise<Recipe[]> => {
    try {
        return Promise.resolve(JSON.parse(localStorage.getItem(RECIPES_KEY) || '[]'))
    } catch (e) {
        localStorage.clear()
        return Promise.resolve([])
    }
}

export const storeRecipes = (recipes: Recipe[]): Promise<boolean> => {
    try {
        localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes))
        return Promise.resolve(true)
    } catch (e) {
        return Promise.resolve(false)
    }
}

export const removeRecipe = (allRecipes: Recipe[], recipe: Recipe): Promise<boolean> => {
    const afterChanges = allRecipes.filter(r => r.id !== recipe.id)
    return storeRecipes(afterChanges)
}

export const submitRecipe = async (recipe: Recipe): Promise<Recipe> => {
    recipe.id = new Date().getTime()
    return recipe
}
