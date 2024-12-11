import { getMovie } from "actions/movieActions";
import MovieDetailUI from "./ui";

export default async function MovieDetailPage({ params }) {
  const movie = await getMovie(params.id);

  return (
    <>
      {movie ? <MovieDetailUI movie={movie} /> : <p>movie does not exist.</p>}
    </>
  );
}
