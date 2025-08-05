import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { removeUser } from "./UserNameSlice";
import { setPaaginationMood } from "./PokemonsSlice";


export const Header = () => {
  const username = useSelector((state: RootState) => state.user.username)
  
const dispatch = useDispatch()
const Navigate = useNavigate()
const handelLogOut =  ()=>{
   Navigate('/')
  
  dispatch(removeUser(""))
  
}

  return (
    <Stack spacing={2} direction={"column"} alignItems={"center"}>
      <Stack spacing={2}>
      <Typography variant="h3">Welcom {username}</Typography>
      <Button
          variant="contained"
          sx={{
            fontSize: "1.5rem",
            backgroundColor: "black",
            fontWeight: "700",
          }}
          onClick={handelLogOut}
        >
          LogOut
        </Button>
      </Stack>
      <Typography variant="h1">
        {" "}
        <WhatshotIcon sx={{ fontSize: "4rem" }} /> pokedox
      </Typography>
      <Typography variant="h3" align="center" color="gray">
        Discover and explore pokemon with pge control
      </Typography>
      <Stack direction={"row"} spacing={2}>
     
        <Button
          variant="contained"
          sx={{
            fontSize: "1.5rem",
            backgroundColor: "black",
            fontWeight: "700",
          }}
          onClick={()=>dispatch(setPaaginationMood("pages"))}
        >
          page control
        </Button>
      
       
        <Button
          variant="contained"
          sx={{
            fontSize: "1.5rem",
            backgroundColor: "white",
            color: "black",
            fontWeight: "700",
          }}
          onClick={()=>dispatch(setPaaginationMood("infinite"))}
        >
          infinite scroll
        </Button>
        
      </Stack>
    </Stack>
  );
};
