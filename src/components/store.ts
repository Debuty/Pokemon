import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserNameSlice";
import PokemonsReducer from "./PokemonsSlice";



export const store = configureStore({
  reducer: {
    user: userReducer,
    pokemons:PokemonsReducer,
  },
});
 console.log( store.getState())
export type RootState = ReturnType<typeof store.getState>;
