export const storeNotes = (value) => {
    localStorage.setItem("Notes", JSON.stringify(value) )
};

export const getNotes = () => {
    return JSON.parse(localStorage.getItem("Notes")) || [];
}