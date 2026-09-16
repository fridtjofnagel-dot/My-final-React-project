export const storeNote = (value) => {
    localStorage.setItem("Notes", JSON.stringify(value) )
};

export const getNote = () => {
    return JSON.parse(localStorage.getItem("Notes")) || [];
}