import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function MovieInfo() {
    const { movieId: movie_id } = useParams();  
  
    const [ details, setDetails ] = useState({});

  
  
  useEffect( () => {
    axios({
        url: `https://api.themoviedb.org/3/movie/${movie_id}`,
        params: {
            api_key: 'fdc64670b61843a5841c94be98a6df3b'
        }
    }).then( (movieInfo) => {
        console.log(movieInfo);
        setDetails(movieInfo.data)
    })

  }, []);
  
    return (
    <section className="poster">
        <div className="description">
            <h3>{details.tagline}</h3>
            <h2>{details.title}</h2>
            <p>{details.overview}</p>

        </div>  
        <div className="poster-image">
            <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={`a movie poster for ${details.original_title}`}  />
        </div>
    </section>
  )
}

export default MovieInfo;