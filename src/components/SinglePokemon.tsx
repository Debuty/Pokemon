import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import type { SinglePokemonProps } from "../types/pokemon.types";

export const SinglePokemon = ({ name, isLoading, url }: SinglePokemonProps) => {
  const match = url.match(/\/pokemon\/(\d+)\//);
  const number = match ? parseInt(match[1], 10) : 0;
  


  return (
    <Link to={`/Pokemon/${number}`} style={{ display: "contents" }}>
      <Grid
        key={name}
        size={{ xs: 12, md: 6, lg: 4, xl: 3 }}
        sx={{
          backgroundColor:"white",
          boxShadow:"0px 0px 1px black",
          borderRadius:"1rem",
          width:"28rem"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            border: "1px solid #eee",
            borderRadius: 2,
            width: "100%",
          }}
        >
          {isLoading ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <div style={{
              backgroundColor:"#1111",
              padding:"4rem",
              borderRadius:"1rem"
            }}>
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${number}.gif`}
              alt={name}
              style={{ width: "100%" }}
            />
            </div>
          )}
          {/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${number}.png */}
          <Typography variant="h3" sx={{ mt: 2 ,fontSize:"2.5rem" }} color="black">
            {name}
          </Typography>
          <Typography variant="h4" color="text.secondary">
            #00{number}
          </Typography>
        </Box>
      </Grid>
    </Link>
  );
};
