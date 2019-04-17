import {Recipe} from '../interfaces/recipe'

const mapUser = (userData: any): Recipe => ({
    ...userData
})

export const getUsers = (pageProps: any = {limit: 2}): Promise<Recipe[]> => {
    const queryParams = new URLSearchParams()
    queryParams.set('results', pageProps.limit)
    return fetch(`https://randomuser.me/api/?${queryParams.toString()}`)
        .then(r => r.json())
        .then(data => data.results.map(mapUser))
        .then( mapped => {
            console.log(mapped)
            return mapped
        })
}
