import { Link, Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import { SectionsContentLayoutProps } from './SectionsContentLayout.type';

import './SectionsContentLayout.scss';

export default function SectionsContentLayout({
  heading,
  navigation,
  children,
}: SectionsContentLayoutProps) {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">{heading}</Typography>
        <Box mb={4}>{children}</Box>
        <Grid container columnSpacing={4}>
          <Grid item xs={12} md={3}>
            <Stack className="content-navigation">
              {navigation.map((navItem) => (
                <Box
                  key={navItem.id}
                  mb={2}
                  className="content-navigation__item"
                >
                  <Paper elevation={3}>
                    <Link
                      to={navItem.path}
                      className="content-navigation__link"
                    >
                      {navItem.name}
                    </Link>
                  </Paper>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={9} display="flex">
            <Paper style={{ width: '100%' }} elevation={3}>
              <Box p={2}>
                <Outlet />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
