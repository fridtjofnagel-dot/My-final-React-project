import {useState, createContext, useContext } from 'react'

export const AppContext = createContext() // Initiallizing the context

export function useApp () {
    const context = useContext(AppContext); //make it useable/accesable with the useContext Hook!

    if (!context) {
        throw new Error ('You are working out of the AppState, this will not work.') // Your component is not wrapped in the AppState!
    }

    return context; 

}





//AppContext ist keine Komponente, sondern ein Objekt.
//AppContext ist eine leere Infrastruktur! 
//AppState ist eine Komponente und hält den useState State!!!!
//mit <AppContext.Provider value="{...}"> speichert sie den aktuellen state und macht Ihn für
// die Childkomponenten verfügbar
// useApp ist das Empfangsgerät!!!!!
// AppState ist wie ein Sender und useApp der Empfänger und AppContext ist nur die Infrastrukutr!!!