import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import MovieDetails from 'views/MovieDetails';
import HomeView from '../views/HomeView';
import MovieView from 'views/MoviesView';
import Cast from '../views/Cast';
import Reviews from 'views/Reviews';
import NotFound from 'views/NotFound';



export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
       <Route index element={<HomeView />} />
        <Route path="/movies" element={<MovieView />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
