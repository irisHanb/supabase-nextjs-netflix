import { getMovie } from "actions/movieActions";
import MovieDetailUI from "./ui";

export async function generateMetadata({ params }) {
  const movie = await getMovie(params.id);
  const { title, overview, image_url } = movie;
  return {
    title,
    description: overview,
    openGraph: {
      images: [image_url],
    },
  };
}

export default async function MovieDetailPage({ params }) {
  const movie = await getMovie(params.id);

  return (
    <>
      {movie ? <MovieDetailUI movie={movie} /> : <p>movie does not exist.</p>}
    </>
  );
}
