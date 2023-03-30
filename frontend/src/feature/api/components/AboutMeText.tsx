import {useApi} from "../useApi";

export default function AboutMeText(props: { className: string }) {
  const api = useApi();

  const entries = () =>
     api.data.aboutMeText.map((entry, idx) => (
          <p key={entry[0] + idx} className="font-serif text-lg  my-4">
            {entry}
          </p>
        ))
  return <div className={props.className}>{entries()}</div>;
}
