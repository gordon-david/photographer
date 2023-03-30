import { AboutMeText } from "../feature/api";
import { AvatarImage } from "../feature/api";

export default function About() {
  return (
    <div>
      <AvatarImage className="aspect-square rounded-full w-1/2 mx-auto" />
      <AboutMeText className="flex flex-col" />
    </div>
  );
}
