import { Spinner } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { deleteFile } from "actions/storageActions";
import { queryClient } from "config/ReactQueryClientProvider";
import { getImageUrl } from "utils/supabase/storage";

export default function DropboxImg({ image }) {
  const { name } = image;
  const deleteFileMutation = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      <div className="">
        <img
          src={getImageUrl(name)}
          className="w-full rounded-2xl aspect-square"
        />
      </div>
      <div>{name}</div>
      <div className="absolute top-4 right-4">
        <IconButton color="red" onClick={() => deleteFileMutation.mutate(name)}>
          {deleteFileMutation.isPending ? (
            <Spinner />
          ) : (
            <i className="fas fa-trash" />
          )}
        </IconButton>
      </div>
    </div>
  );
}
