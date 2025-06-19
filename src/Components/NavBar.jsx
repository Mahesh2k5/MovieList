const NavBar = ({ setSearchTerm }) => {
    return(
        <>
            <div className="navbar">
                <a href="/" className="icon-link"><div className="icon" ><h1>Flick Finder</h1></div></a>
                <div className="navs">
                    <a href="/">Home</a>
                    <button className="navbtns" onClick={() => setSearchTerm("series")}>TV Shows</button>
                    <button className="navbtns" onClick={() => setSearchTerm("movie")}>Movies</button>
                    <button className="navbtns">Upcoming Movies</button>
                    <button className="navbtns">Favourites</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default NavBar;