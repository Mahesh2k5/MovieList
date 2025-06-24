import React from 'react';

const MovieGrid = ({ movies, setSearchTerm }) => {
    const categories = [
        { name: 'Marvel', query: 'marvel' },
        { name: 'Action', query: 'action' },
        { name: 'Crime', query: 'crime' },
        { name: 'Comedy', query: 'comedy' },
        { name: 'Drama', query: 'drama' },
        { name: 'Horror', query: 'horror' }
    ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="movie-container">
            <div className="search-section">
                <div className="type">
                    {categories.map((category) => (
                        <button
                            key={category.query}
                            onClick={() => setSearchTerm(category.query)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <input
                    placeholder="Search for a Movie"
                    type="text"
                    className="search"
                    onChange={handleSearch}
                />
            </div>
            
            <div className="movie-grid">
                {movies.map((movie) => (
                    <div 
                        key={movie.imdbID} 
                        className="movie-card"
                        onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}/`)}
                    >
                        <div className="movie-poster">
                            <img 
                                src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} 
                                alt={movie.Title} 
                            />
                        </div>
                        <div className="movie-info">
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieGrid;