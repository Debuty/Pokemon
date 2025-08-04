import type { StatDetail } from "../types/pokemon.types";
import { StatesLinear } from "./StatesLinear";


export const PokemonStats = ({stats}:{stats:StatDetail[]}) => {
  return (
    <div className="card__stats">
    <div className="title">Base Stats</div>
    <div className="card__stats__Liens">
      {stats.map((stat: StatDetail, index: number) => {
        return (
          <StatesLinear
            value={stat.base_stat}
            name={
              stat.stat.name.charAt(0).toUpperCase() +
              stat.stat.name.slice(1)
            }
            key={index}
          />
        );
      })}
    </div>
  </div>
  )
}
