import useApi from "../useApi.ts";
import GalleryImage from "./GalleryImage.tsx";

export default function GalleryImages() {
  const api = useApi();

  return (
    <div className="flex flex-col">
      {api.loaded ? (
        api.data.galleryImages.map((i, idx) => (
          <GalleryImage
            src={i.url}
            alt={i.title}
            title={i.title}
            key={i.url + idx}
            className="my-4"
          />
        ))
      ) : (
        <div> loading... </div>
      )}
    </div>
  );
}
