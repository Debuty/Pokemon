

export const PokemonExprience = ({base_experience}: {base_experience: number}) => {
  return (
    <div className="card__base-exprience">
    <div className="title">Base Experience</div>
    <div className="card__base-exprience__Num">
      {base_experience} XP
    </div>
  </div>
  )
}
