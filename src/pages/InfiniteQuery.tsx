import { Button, CircularProgress, Grid } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { SinglePokemon } from "../components/SinglePokemon";
import { Header } from "../components/Header";
import { Stack } from "@mui/material";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

const fetchPokemons = async ({ pageParam = 0 }): Promise<PokemonResponse> => {
  
  const offset = pageParam * 10;
  const response = await axios.get<PokemonResponse>(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
  );

  return response.data;
};

export const InfiniteQuery = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
    initialPageParam: 0,
    getNextPageParam: (lastPageData, allLoadedPages) => {
      const totalPokemonCount = lastPageData.count;
      console.log(lastPageData);
      const POKEMON_PER_PAGE = 10;
      const totalPagesNeeded = Math.ceil(totalPokemonCount / POKEMON_PER_PAGE);
      const nextPageNumber = allLoadedPages.length;

      return nextPageNumber < totalPagesNeeded ? nextPageNumber : undefined;
    },
  });
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
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      <Grid
          container
          spacing={8}
          sx={{
            justifyContent: "center",
          }}
        >{data?.pages.flatMap(page=>page.results.map(pokemon=> <SinglePokemon
          name={pokemon.name}
          isLoading={isLoading}
          key={pokemon.name}
          url={pokemon.url}
        />))}
       
           
          
    
        </Grid>

      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        variant="contained"
        sx={{
          fontSize: "1.5rem",
          alignSelf: "center",
        }}
      >
        {isFetchingNextPage ? (
          <CircularProgress />
        ) : hasNextPage ? (
          "Load More"
        ) : (
          "No more Pokémon"
        )}
      </Button>
    </Stack>
  );
};
