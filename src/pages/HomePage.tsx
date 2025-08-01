import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box>
      <Link to={"/Pokemon"}>
        {" "}
        <Button sx={{
          fontSize:"3rem"
        }} variant="contained">Pokemon Page</Button>
      </Link>
    </Box>
  );
};

export default HomePage;
