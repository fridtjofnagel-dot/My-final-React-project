import { Link } from 'react-router-dom'

function Coverpage () {
    return(
    <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(/waldo.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold">Come in, we're friendly.</h1>
            <p className="mb-9">
              (most of the time.....often......sometimes...........ok fine, just on holidays)
            </p>
              <nav>
                <Link to='/Home'>
                <button className="bg-amber-600 btn btn-primary rounded-3xl">This way!</button>
                </Link>
              </nav> 
          </div>
        </div>
    </div>
    )
}


export default Coverpage