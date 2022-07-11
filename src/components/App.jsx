import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const MovieDetails = lazy(() => import('../views/MovieDetails/MovieDetails'));
const HomeView = lazy(() => import('../views/HomeView'));
const MovieView = lazy(() => import('../views/MoviesView'));
const Cast = lazy(() => import('../views/Cast/Cast'));
const Reviews = lazy(() => import('../views/Reviews/Reviews'));
const NotFound = lazy(() => import('../views/NotFound'));



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
