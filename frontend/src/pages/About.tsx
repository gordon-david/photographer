import { AboutMeText } from "../feature/api";
import { AvatarImage } from "../feature/api";

export default function About() {
  return (
    <div>
      <AvatarImage className="object-cover w-60 h-60 rounded-full  mx-auto" />
      <AboutMeText className="flex flex-col" />
    </div>
  );
}
