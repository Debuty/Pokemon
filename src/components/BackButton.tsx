import { Button } from '@mui/material'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link} from 'react-router-dom'

export const BackButton = () => {
  
  const Typeof_pag = window.location.pathname.split("/")[1]
  return (
    <Link to={`/${Typeof_pag}`} style={{ display: "contents" }}>
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
