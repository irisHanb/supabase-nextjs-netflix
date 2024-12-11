import DropboxImg from "./dropbox-img";
import { useQuery } from "@tanstack/react-query";
import { searchFiles } from "actions/storageActions";
import { Spinner } from "@material-tailwind/react";

export default function DropboxImgList({ searchInput }) {
  const searchImagesQuery = useQuery({
    queryKey: ["images", searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {searchImagesQuery.isLoading && <Spinner />}
      {searchImagesQuery.data &&
        searchImagesQuery.data.map((image) => (
          <DropboxImg key={image.id} image={image} />
        ))}
    </section>
  );
}
