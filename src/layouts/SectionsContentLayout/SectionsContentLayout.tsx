import { Link, Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { SectionsContentLayoutProps } from './SectionsContentLayout.type';

export default function SectionsContentLayout({
  heading,
  navigation,
}: SectionsContentLayoutProps) {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">{heading}</Typography>
        <Grid container spacing={4}>
          <Grid item>
            <List className="navigation__list">
              {navigation.map((navItem) => (
                <ListItem
                  key={navItem.id}
                  disablePadding
                  className="navigation__item"
                  style={{ marginBottom: 0 }}
                >
                  <ListItemButton>
                    <Link to={navItem.path} className="navigation__link">
                      <ListItemText primary={navItem.name} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
