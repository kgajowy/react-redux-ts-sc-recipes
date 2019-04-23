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

// design decision: we could pass all Recipe[] from Store but we 'mimic' the real API. Obviously it is slower (parse+get)
export const removeRecipe = async (recipe: Recipe): Promise<boolean> => {
    const allRecipes = await getRecipes()
    const afterChanges = allRecipes.filter(r => r.id !== recipe.id)
    await storeRecipes(afterChanges)
    return true
}

export const submitRecipe = async (recipe: Recipe): Promise<Recipe> => {
    recipe.id = new Date().getTime()
    const allRecipes = await getRecipes()
    await storeRecipes([recipe, ...allRecipes])
    return recipe
}

export const updateRecipe = async (recipe: Recipe): Promise<Recipe> => {
    const allRecipes = await getRecipes()
    await storeRecipes(allRecipes.map(r => r.id === recipe.id ? recipe : r))
    return recipe
}
