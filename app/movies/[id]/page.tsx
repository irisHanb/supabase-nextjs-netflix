import MovieDetailUI from "./ui";

export default function MovieDetailPage({ params }) {
  return <MovieDetailUI id={params.id} />;
}
