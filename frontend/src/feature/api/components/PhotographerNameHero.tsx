import { useApi } from "../useApi.tsx"
import { Link } from "react-router-dom"

export function PhotographerNameHero(){
	const api = useApi()

	console.log(api)

	return (
	<h1 className="text-3xl font-bold italic hover:text-red-500 text-ellipsis whitespace-nowrap truncate"><Link to="/">{api.data.name}</Link></h1>
	);
	}
