export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  results: Pokemon[];
  count: number;
  next: string | null;
  previous: string | null;
}
//////////////////////////////////////////////////////
export interface SinglePokemonProps {
  name: string;
  isLoading: boolean;
  url: string;
}
///////////////////////////////////////////////////////
export interface StatesLinearProps {
  name: string;
  value: number;
}

///////////////////////////////////////////////////////
export interface PokemonStat {
  name: string;
  url: string;
}

export interface StatDetail {
  base_stat: number;
  effort: number;
  stat: PokemonStat;
}

///////////////////////////////////////////////////////
export interface Ability {
  name: string;
  url: string;
}

export interface AbilityMain {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}