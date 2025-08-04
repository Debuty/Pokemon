import { Avatar, CircularProgress } from "@mui/material";
import { useState } from "react";

interface PokemonAvHeWeProps {
  height: number;
  weight: number;
  id:string | undefined
}

export const PokemonAvHeWe = ({ height, weight , id }: PokemonAvHeWeProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <div className="card__avatar-height-weight">
      <div
        className="card__avatar"
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
        }}
      >
        <Avatar
          sx={{
            width: "100%",
            height: "100%",
          }}
          alt="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          onLoad={() => setImageLoading(false)}
        />
        {imageLoading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 100,
            }}
          >
            <CircularProgress size={60} />
          </div>
        )}
      </div>
      <div className="card__height-weight">
        <div className="card__height">
          <span>Height</span>
          <span>{height / 10} M</span>
        </div>
        <div className="card__weight">
          <span>weight</span>
          <span>{weight / 10} Kg</span>
        </div>
      </div>
    </div>
  );
};
