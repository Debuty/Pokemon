import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/UserNameSlice";
import PokemonsReducer from "../components/PokemonsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pokemons: PokemonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;