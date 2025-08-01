import { Box, LinearProgress, Typography } from "@mui/material";

import type { StatesLinearProps } from "../types/pokemon.types";

export const StatesLinear = ({ value, name }: StatesLinearProps) => {
  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>
      <Box display="flex" justifyContent="space-between" mb={1} width={"80%"}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h4">{value}</Typography>
      </Box>
      <LinearProgress
        value={Math.min(value, 100)}
        variant="determinate"
        sx={{
          height: "10px",
          width: "80% ",
          borderRadius: "5px",
          backgroundColor: "#e0e0e0", // رمادي فاتح (لون الخط الفاضي)
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#000000", // أسود (لون الخط المملوء)
          },
        }}
      />
    </Box>
  );
};
