import { Box } from '@mui/material';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LandingPage />
    </Box>
  );
}

export default App;
