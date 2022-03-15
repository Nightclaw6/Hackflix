import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieInfo from './MovieInfo';

function MovieCatalogue() {
  
  const [movies, setMovies] = useState([]);
  
  useEffect ( () => {
    console.log('Side effect is running');
    axios({
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            api_key: 'fdc64670b61843a5841c94be98a6df3b',
            include_adult: false
        }
    }).then( (showMeTheMovies) => {
        console.log(showMeTheMovies);
        setMovies(showMeTheMovies.data.results);
    })
  }, []);
  console.log("Catalogue is rendered")
    return (
        <section>

            <h2>Here are your options:</h2>
            <ul className="catalogue">
                {
                    movies.map( function(movie) {
                        return (
                            <Link key={movie.id} to={`/${movie.id}`}>
                                <li> 
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`A poster for the movie ${movie.title}`} />
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default MovieCatalogue;