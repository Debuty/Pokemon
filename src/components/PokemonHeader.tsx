interface PokemonHeaderProps{
    name:string,
    id:string | undefined
}

export const PokemonHeader = ({name,id}:PokemonHeaderProps) => {
  return (
    <div className="card__header">
    <h2 className="pokemon-name">{name}</h2>
    <span className="pokemon-id">#00{id}</span>
  </div>
  )
}
