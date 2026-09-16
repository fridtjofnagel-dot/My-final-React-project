import PokemonCatchButton from './PokemonCatchButton'


function PokemonCard () {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src={pokemon.image}
                alt="Pokemon" />
            </figure>
            <div className="card-body">
                <h2 className="pokemon">{pokemon.name}</h2>
                <div className="card-actions justify-end">
                <PokemonCatchButton />
                </div>
            </div>
        </div>
    )
}

export default PokemonCard