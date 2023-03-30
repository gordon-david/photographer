import {useApi} from "../useApi";
import GalleryImage from "./GalleryImage";

export default function GalleryImages() {
  const api = useApi();

  return (
    <div className="flex flex-col">
      { api.data.galleryImages.map((i, idx) => (
          <GalleryImage
            src={i.url}
            alt={i.title}
            title={i.title}
            key={i.url + idx}
            className="my-4"
          />
        ))
      }
    </div>
  );
}
