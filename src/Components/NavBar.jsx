import { Link } from "react-router-dom";

const NavBar = ({ setSearchTerm }) => {
    const handleNavClick = (category) => {
        setSearchTerm(category);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="icon-link" onClick={() => handleNavClick('batman')}>
                <div className="icon">
                    <h1>Flick Finder</h1>
                </div>
            </Link>
            <div className="navs">
                <Link to="/" className="nav-link" onClick={() => handleNavClick('batman')}>
                    Home
                </Link>
                <Link to="/tvshows" className="nav-link" onClick={() => handleNavClick('series')}>
                    TV Shows
                </Link>
                <Link to="/movies" className="nav-link" onClick={() => handleNavClick('movie')}>
                    Movies
                </Link>
                <Link to="/" className="nav-link" onClick={() => handleNavClick('upcoming')}>
                    Upcoming Movies
                </Link>
                <Link to="/" className="nav-link" onClick={() => handleNavClick('popular')}>
                    Popular
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;