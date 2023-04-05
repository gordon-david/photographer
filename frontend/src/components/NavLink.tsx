import { Link } from 'react-router-dom'

  export const NavLink = (props: { path:string, text:string }) => (
    <Link to={props.path} className="px-4 font-bold text-lg hover:text-red-500">
      {`${props.text}`}
    </Link>
  );
