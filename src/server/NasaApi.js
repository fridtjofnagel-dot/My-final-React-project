export const fetchNasaPic = async (setLoading, setError, setNasaPicDay) => {
    setLoading(true)
    try {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=JeW7DcAHxqiWXVemPvyOoydVzON4sM7aVZCfYrjn')
        if (!res.ok) throw new Error('Failed to fetch Nasa Picture of the Day!');
        
        const data = await res.json();
        setNasaPicDay(data)
    }   catch (err) {
        setError(err.message)
    }   finally {
        setLoading(false)
    } 
}

export default fetchNasaPic


