import { Box, Grid, Stack, CircularProgress, Pagination } from "@mui/material";
import axios from "axios";
import { Header } from "./../components/Header";
import { useQuery } from "@tanstack/react-query";
import { SinglePokemon } from "../components/SinglePokemon";
import type { PokemonResponse } from "../types/pokemon.types";
import { useState } from "react";

const PokemonPage = () => {


  const [page, setPage] = useState<number>(1);

 
  const { data, isLoading, isError } = useQuery<PokemonResponse>({
    queryKey: ["pokemon", page],
    queryFn: async () => {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${
        (page - 1) * 10
      }&limit=10`;
      
      const response = await axios.get(url);

      return response.data;
    },
   
  });
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (isError) return <p>error</p>;
  return (
    <Stack
      spacing={4}
      sx={{
        width: "50%",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <Header />
      <Grid container spacing={8} sx={{
        justifyContent:"center"
      }}>
        {data?.results.map((pokemon) => (
          <SinglePokemon
            name={pokemon.name}
            isLoading={isLoading}
            key={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </Grid>
      <Pagination
        page={page}
        count={1302}
        onChange={handleChange}
        sx={{
          "& .MuiPaginationItem-root": {
            fontSize: "1.5rem",
            minWidth: "48px",
            height: "48px",
            padding: "12px",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "4rem",
          },
          "& .MuiPagination-ul": {
            justifyContent: "center",
          },
        }}
      />
    </Stack>
  );
};

export default PokemonPage;
