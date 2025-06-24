import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Content from './Components/Content'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MovieGrid from './Components/MovieGrid'

function App() {
  const [searchTerm, setSearchTerm] = useState('batman');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setMovies([]);
      setError(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=18db339a`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network did not respond');
        }
        return response.json();
      })
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
          setError(null);
        } else {
          setMovies([]);
          setError({ message: 'No movies found' });
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setMovies([]);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <Router>
      <div className="app">
        <NavBar setSearchTerm={setSearchTerm} />
        <hr />
        <Routes>
          <Route
            path="/"
            element={<Content searchTerm={searchTerm} setSearchTerm={setSearchTerm} movies={movies} loading={loading} error={error} />}
          />
          <Route
            path="/tvshows"
            element={<MovieGrid movies={movies} setSearchTerm={setSearchTerm} loading={loading} error={error} />}
          />
          <Route
            path="/movies"
            element={<MovieGrid movies={movies} setSearchTerm={setSearchTerm} loading={loading} error={error} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
