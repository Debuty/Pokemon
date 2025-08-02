
import { Alert, Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const PokemonError = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '50vh',
      padding: 4
    }}>
      <Alert 
        severity="error"
        icon={<ErrorOutlineIcon sx={{ fontSize: '3rem' }} />}
        sx={{
          width: '100%',
          maxWidth: '800px',
          padding: 4,
          '& .MuiAlert-message': {
            width: '100%',
            textAlign: 'center'
          },
          '& .MuiAlert-icon': {
            fontSize: '2.5rem',
            marginRight: 2,
            alignItems: 'center'
          }
        }}
      >
        <Typography 
          variant="h4" 
          component="div" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            mb: 3
          }}
        >
          Oops! Something went wrong
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          We couldn't fetch the Pokemon details. Please try again later or check your connection.
        </Typography>
      </Alert>
    </Box>
  );
}
