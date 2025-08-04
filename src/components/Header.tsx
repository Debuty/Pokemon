import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <Stack spacing={2} direction={"column"} alignItems={"center"}>
      <Typography variant="h1">
        {" "}
        <WhatshotIcon sx={{ fontSize: "4rem" }} /> pokedox
      </Typography>
      <Typography variant="h3" align="center" color="gray">
        Discover and explore pokemon with pge control
      </Typography>
      <Stack direction={"row"} spacing={2}>
       <Link to={"/Pokemon"}>
        <Button
          variant="contained"
          sx={{
            fontSize: "1.5rem",
            backgroundColor: "black",
            fontWeight: "700",
          }}
        >
          page control
        </Button>
        </Link>
        <Link to={"/InfiniteQuery"}>
        <Button
          variant="contained"
          sx={{
            fontSize: "1.5rem",
            backgroundColor: "white",
            color: "black",
            fontWeight: "700",
          }}
        >
          infinite scroll
        </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
