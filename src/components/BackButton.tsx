import { Button } from '@mui/material'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link} from 'react-router-dom'

export const BackButton = () => {
  




  return (
    <Link to={'/Pokemon'} style={{ display: "contents" }}>
    {" "}
    <Button
      variant="contained"
      sx={{
        fontSize: "2rem",
        fontWeight: "bolder",
        bgcolor: "white",
        color: "black",
        m: "2rem",
        alignSelf: "self-start",
      }}
      startIcon={<ArrowBackIcon />}
    >
      Back To List
    </Button>{" "}
  </Link>
  )
}
