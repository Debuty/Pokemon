import type { AbilityMain } from "../types/pokemon.types";


export const PokemonAbilities = ({abilities}:{abilities:AbilityMain[]}) => {
  return (
    <div className="card__abilities">
    <div className="title">Abilitie</div>
    <div className="abilities-container">
      {abilities.map((ability: AbilityMain, index: number) => {
        return (
          <span className="card__abilities__abilitie" key={index}>
            {ability.ability.name}
          </span>
        );
      })}
    </div>
  </div>
  )
}
