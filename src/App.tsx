import { Box } from '@mui/material';
import LandingPage from './pages/LandingPage';
import NeuroChatWidget from './components/NeuroChatWidget';

function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LandingPage />
      <NeuroChatWidget />
    </Box>
  );
}

export default App;
