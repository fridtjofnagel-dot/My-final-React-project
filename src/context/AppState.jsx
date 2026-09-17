import { AppContext } from './AppContext'
import { useState } from 'react'
import { getNotes } from '../storage/noteStorage'
import { getPokemon } from '../storage/pokemonStorage'
 

export function AppState ({children}) {
    const [pokemon, setPokemon] = useState([])
    const [notes, setNotes] = useState([])

    return (
        <AppContext.Provider
            value={{
                pokemon,
                setPokemon,
                notes,
                setNotes
            }}
        >
            {children}
        </AppContext.Provider>
    )
}


