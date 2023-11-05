import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Box>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>
    </Box>
  );
}
