export const fetchPokemon = async (setLoading, setError, setPokemon) => {
    setLoading(true)
    try {
        const res = await fetch('https://pokeapi.co/api/v2/evolution-chain?offset=20&limit=20')
        if (!res.ok) throw new Error('Failed to fetch pokemons!');
        
        const data = await res.json();
        setPokemon(data)
    }   catch (err) {
        setError(err.message)
    }   finally {
        setLoading(false)
    } 
}