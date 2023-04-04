import { ReactNode, useEffect, useState } from "react";
import { AvatarImage } from "../feature/api";
import { useApi } from "../feature/api/useApi";
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
export default function Home() {
  const api = useApi();
  return (
    <div className="flex flex-col">
      <div className="flex">
        <AvatarImage
          className="shrink-1 mx-1 min-w-0 object-cover"
          style={{ aspectRatio: "10/16" }}
        />
        <AvatarImage
          className="shrink-1 mx-1 min-w-0 object-cover"
          style={{ aspectRatio: "10/16" }}
        />
      </div>
      <HomeText>{lorem}</HomeText>
      <FadingImages />
      <HomeText />
      <div className="grid gap-2 grid-cols-2">
        <AvatarImage
          className="w-full object-cover min-w-0"
          style={{ aspectRatio: "10/16" }}
        />
        <AvatarImage
          className="w-full object-cover min-w-0"
          style={{ aspectRatio: "10/16" }}
        />
        <AvatarImage
          className="w-full object-cover min-w-0"
          style={{ aspectRatio: "10/16" }}
        />
        <AvatarImage
          className="w-full object-cover min-w-0"
          style={{ aspectRatio: "10/16" }}
        />
      </div>
      <HomeText />
      <div className="grid gap-2 grid-cols-2">
        <AvatarImage
          className="w-full object-cover min-w-0"
          style={{ aspectRatio: "10/16" }}
        />
        <AvatarImage
          className="w-full object-cover min-w-0"
          style={{ aspectRatio: "10/16" }}
        />
      </div>
      <AvatarImage
        className="pt-2 w-full object-cover min-w-0"
        style={{ aspectRatio: "10/16" }}
      />
      <AvatarImage
        className="pt-2 w-full object-cover min-w-0"
        style={{ aspectRatio: "16/12" }}
      />
    </div>
  );
}

const HomeText = ({ children }: { children?: ReactNode }) => (
  <p className="my-8 italic text-lg">{children ? children : lorem}</p>
);

const FadingImages = (props: { images?: ReactNode[] }) => {
  const fadeTimeMS = 4000;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current < images.length - 1 ? current + 1 : 0));
    }, fadeTimeMS);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [
    <div>
      <AvatarImage /> <div className="float-right italic"> image 1 </div>
    </div>,
    <div>
      <AvatarImage /> <div className="float-right italic"> image 2 </div>
    </div>,
    <div>
      <AvatarImage /> <div className="float-right italic"> image 3 </div>
    </div>,
    <div>
      <AvatarImage /> <div className="float-right italic"> image 4 </div>
    </div>,
  ];

  return (
    <div>
      {images.map((e: ReactNode, idx: number) => (
        <div
          className={`${
            current === idx ? "" : "hidden"
          } animate-[fade_4s_ease-out]`}
        >
          {e}
        </div>
      ))}
    </div>
  );
};
