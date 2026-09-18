import NasaPic from '../components/NasaPic'

function Nasa () {
    return (
    <div>
        <title>Nasa picture of the day</title>
        <div className="flex justify-center items-center" >
        <img className="h-50"src="https://upload.wikimedia.org/wikipedia/commons/2/25/Nasa-logo.gif?utm_source=de.wikipedia.org&utm_campaign=index&utm_content=original"/>
            <section>
                <NasaPic />
            </section>
        </div>
    </div>
    )
}

export default Nasa