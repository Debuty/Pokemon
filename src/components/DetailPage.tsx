import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

import "./DetailPage.scss";
import { Avatar, Button } from "@mui/material";
import { StatesLinear } from "./StatesLinear";
import type { StatDetail, AbilityMain } from "../types/pokemon.types";

export const DetailPage = () => {
  const num = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["DetailPage"],
    queryFn: async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num.id}/`
      );
      return response.data;
    },
  });

  if (!data) {
    return null;
  }
  const { abilities, base_experience, height, name, stats, weight } = data;

  return (
    <>
      <div className="container">
        <Link to={"/Pokemon"} style={{ display: "contents" }}>
          {" "}
          <Button
            variant="contained"
            sx={{
              fontSize: "2rem",
              fontWeight: "bolder",
              bgcolor: "white",
              color: "black",
              m: "2rem",
              alignSelf: "self-start",
            }}
            startIcon={<ArrowBackIcon />}
          >
            Back To List
          </Button>{" "}
        </Link>
        <div className="card">
          <div className="card__header">
            <h2 className="pokemon-name">{name}</h2>
            <span className="pokemon-id">#00{num.id}</span>
          </div>
          <div className="card__avatar-height-weight">
            <div className="card__avatar">
              <Avatar
                sx={{
                  width: "100%",
                  height: "100%",
                }}
                alt="pokemon"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num.id}.png`}
              />
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
          <div className="card__stats">
            <div className="title">Base Stats</div>
            <div className="card__stats__Liens">
              {stats.map((stat: StatDetail, index: number) => {
                return (
                  <StatesLinear
                    value={stat.base_stat}
                    name={stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
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
          <div className="card__base-exprience">
            <div className="title">Base Experience</div>
            <div className="card__base-exprience__Num">
              {base_experience} XP
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
