import React from "react";

import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import Spinner from "./elements/Spinner";
import LoadMoreBtn from "./elements/LoadMoreBtn";

import { useHomeFetch } from "./hooks/useHomeFetch";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

import NoImage from "./images/no_image.jpg";
import { useState } from "react";

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();

  const [searchTerm, setSearchTerm] = useState("");

  console.log(state);

  if (error) return <div>Somthing went wrong ....</div>;
  if (!state.movies[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
