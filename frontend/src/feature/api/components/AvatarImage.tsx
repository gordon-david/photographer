import {useApi} from "../useApi";

export default function AvatarImage(props: { className: string }) {
  const api = useApi();

  return <img className={props.className} src={api.data.avatarUrl} />;
}
