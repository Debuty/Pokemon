import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import "./DetailPage.scss";
import { CircularProgress } from "@mui/material";

import { PokemonError } from "./PokemonError";
import { BackButton } from "./BackButton";
import { PokemonHeader } from "./PokemonHeader";
import { PokemonAvHeWe } from "./PokemonAvHeWe";
import { PokemonStats } from "./PokemonStats";
import { PokemonAbilities } from "./PokemonAbilities";
import { PokemonExprience } from "./PokemonExprience";

export const DetailPage = () => {
  const { id, type } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["DetailPage"],
    queryFn: async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (!isError) {
    var { abilities, base_experience, height, name, stats, weight } = data;
  }

  return (
    <>
      <div className="container">
        <BackButton />
        {!isError ? (
          <div className="card">
            <PokemonHeader name={name} id={id} />
            <PokemonAvHeWe height={height} weight={weight} id={id} />
            <PokemonStats stats={stats} />
            <PokemonAbilities abilities={abilities} />
            <PokemonExprience base_experience={base_experience} />
          </div>
        ) : (
          <PokemonError />
        )}
      </div>
    </>
  );
};
