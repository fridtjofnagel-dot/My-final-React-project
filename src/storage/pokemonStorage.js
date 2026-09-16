export const storePokemon = (value) => {
    localStorage.setItem("PokemonInventar", JSON.stringify(value) )
};

export const getPokemon = () => {
    return JSON.parse(localStorage.getItem("PokemonInventar")) || [];
}