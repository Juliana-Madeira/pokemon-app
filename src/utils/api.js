
export const searchPokemon = async (pokemon) => { 
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const res = await fetch(url);
        return await res.json();

    } catch (error) {
        console.log('Erro: ', error)
    }
}