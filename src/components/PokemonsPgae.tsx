import { useSelector } from "react-redux"
import type { RootState } from "./store"
import PokemonPage from "../pages/PokemonPage"
import { InfiniteQuery } from "../pages/InfiniteQuery"


export const PokemonsPgae = () => {
    const pokemons = useSelector((state: RootState) => state.pokemons)

if(pokemons.pagination_mood == "pages") return ( <PokemonPage/>)
else return <InfiniteQuery/>

}
