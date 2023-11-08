import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { ServiceList } from './components';

import { Concepts } from '@/src/constants/routes/concepts';
import { Dashboard } from '@/src/constants/routes/dashboard';

export default function Services() {
  const navigate = useNavigate();

  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Grid container justifyContent="space-between" columnSpacing={4} mb={2}>
          <Grid item>
            <Typography variant="h1">Service</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                navigate(Concepts.SERVICES_CREATE);
              }}
            >
              Create Service
            </Button>
          </Grid>
        </Grid>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Dashboard.ADMIN}>Home</Link>
            <Typography>Service</Typography>
          </Breadcrumbs>
        </Box>
        <ServiceList />
      </Container>
    </Box>
  );
}
