"use client";

import { useQuery } from "@tanstack/react-query";
import MovieCard from "./movie-card";
import { searchMovies } from "actions/movieActions";
import { Spinner } from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);
  console.log(search);
  const searchMoviesQuery = useQuery({
    queryKey: ["movie", search],
    queryFn: () => searchMovies(search),
  });
  return (
    <div className="grid gap-1 grid-cols-3 md:grid-cols-4  w-full h-full p-4">
      {searchMoviesQuery.isLoading && <Spinner />}
      {searchMoviesQuery.data &&
        searchMoviesQuery.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
