const BASE_PATH = "https://pokeapi.co/api/v2/pokemon/"

export const getPokemonList = async (url = BASE_PATH) => {
    const response = await fetch(url)
    return await response.json()
}

export const getPokemonData = async (id) => {
    const response = await fetch(`${BASE_PATH}${id}`)
    return await response.json()
}