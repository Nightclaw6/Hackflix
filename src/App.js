import './index.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={ <MovieCatalogue /> }/>
        <Route path="/:movieId" element={ <MovieInfo /> }/>
      </Routes>
    </div>
  );
}

export default App;
