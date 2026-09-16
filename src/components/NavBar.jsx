

const NavBar = () => {
    return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" popoverTarget="popover-1">
          <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
        </button>
        <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
            <li><a>Home</a></li>
            <li><a>Pokemon</a></li>
            <li><a>Nasa</a></li>
            <li><a>Notes</a></li>
        </ul>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Funny Testsite</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg aria-label="More" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
        </button>
      </div>
    </div>
    </div>
    )
}

export default NavBar