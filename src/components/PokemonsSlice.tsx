import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page:1,
    limit:10,
    pagination_mood:"pages"
}

const PokemonsSlice = createSlice({
  name: "Pokemons",
  initialState,
  reducers: {
    setPage: (state, action) => {
          state.page = action.payload
      },
    setLimit: (state, action) => {
        state.limit = action.payload
    },
    setPaaginationMood: (state, action) => {
        state.pagination_mood = action.payload
    },
  },
});

export const { setPage, setLimit ,setPaaginationMood } = PokemonsSlice.actions;

export default PokemonsSlice.reducer;
