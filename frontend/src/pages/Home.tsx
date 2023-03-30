import { useApi } from "../feature/api/useApi";

export default function Home() {
    const api = useApi()
  return (
    <div>
      <img src={api.data.avatarUrl} />
      <h1 className="font-bold text-3xl">{api.data.name}</h1>
      <p className=" mt-8 italic text-4xl text-center">
        "This is a quote from either me or a notable literary figure"
      </p>
    </div>
  );
}
