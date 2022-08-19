export const searchOnePokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log('error:', error);
    }
};

export const getAllPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;          // ? e query params
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log('error:', error);
    }
};