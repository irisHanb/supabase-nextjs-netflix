"use client";

export default function MovieDetailUI({ movie }) {
  const { title, overview, image_url, vote_average, popularity, release_date } =
    movie;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-blue-50 absolute top-0 bottom-0 left-0 right-0 p-4">
      <div className="w-1/3">
        <img src={image_url} />
      </div>
      <div className="items-center md:items-start md:w-2/3 w-full flex flex-col p-6 gap-4 font-bold text-lg">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="font-medium">{overview}</p>
        <div>
          <i className="fas fa-star mr-1" />
          Vote Average: {vote_average}
        </div>
        <div>Popularity: {popularity}</div>
        <div>Release Date: {release_date}</div>
      </div>
    </div>
  );
}
