"use client";

import MovieCard from "./movie-card";

export default function MovieCardList() {
  return (
    <div className="grid gap-1 grid-cols-3 md:grid-cols-4  w-full h-full p-4">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
