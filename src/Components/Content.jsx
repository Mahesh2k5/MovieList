import React from "react";
import { useEffect , useState} from "react";

const Content = ( {searchTerm, setSearchTerm} ) => {
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [showData , setshowData] = React.useState(false);
    const [showmovies, setshowMovies] = React.useState(true);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            // When input is cleared, reset state and avoid fetch
            setshowMovies(false);
            setshowData(true);
            setMovies([]);
            return;
        }

        setLoading(true);

        fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=18db339a`)
        .then((response) => {
            if(!response.ok){
                throw new Error('Network did not respond');         
            }
            return response.json();
        } )
        .then((data) => {
            if (data.Search) {
            setMovies(data.Search);
            } else {
            setError({ message: "No movies found"});
            }
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        })
    },[searchTerm])

    return ( 
        <div className="content">
            {showmovies ?(
                    <div>
                        <h1>Bringing the Big Screen to your Home</h1>
                        <p>Discover, critique and celebrate movies with honest reviews and fresh takes on every film.</p>
                        <button onClick={() => {setshowData(true), setshowMovies(false)}}>Discover More..</button>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error.message}</p>}

                    </div>
                ):(
                    showData && (
                        <>
                            <div className="type">
                                <button onClick={() => {setSearchTerm("marvel")}}>Marvel</button>
                                <button onClick={() => {setSearchTerm("action")}}>Action</button>
                                <button onClick={() => {setSearchTerm("crime")}}>Crime</button>
                                <button onClick={() => {setSearchTerm("comedy")}}>Comedy</button>
                            </div>
                            <input
                                placeholder="Search for a Movie" 
                                type="text" 
                                className="search"
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}>
                            </input>
                            <div className="movie-grid">
                                {movies.map((movie) => (
                                    
                                    <div key={movie.imdbID} className="movie-card">
                                        <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/50x100?text=No+Image'} alt={movie.Title} />
                                        <p>{movie.Title}</p>
                                        <p>{movie.Year}</p>
                                    </div>
                                ))}
                            </div>
                        </>   
                    )
                )
            }
        </div>
     );
}
 
export default Content;