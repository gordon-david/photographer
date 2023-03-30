import useApi from "../useApi.ts";

export default function AboutMeText(props: { className: string }) {
  const api = useApi();

  const entries = () =>
    api.loaded
      ? api.data.aboutMeText.map((entry, idx) => (
          <p key={entry[0] + idx} className="font-serif text-lg  my-4">
            {entry}
          </p>
        ))
      : "loading...";
  return <div className={props.className}>{entries()}</div>;
}
