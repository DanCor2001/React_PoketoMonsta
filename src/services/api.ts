const URL_BASE = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemons = async (num:number): Promise<any[]> => {
    try {
        const response = await fetch(`${URL_BASE}/${num}`)
    
        // if (response.error) throw new Error(response.error)
        
        return await response.json()
        
    } catch (error) {
        console.error("Hubo un error.")
        throw error;
    }
    
}