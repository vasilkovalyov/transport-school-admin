import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import './Navigation.scss';

import { menuNavigaton } from './Navigation.data';

import NavigationMenuItem from './NavigationMenuItem';
import { Dashboard } from '@/src/constants/routes/dashboard';

export default function Navigation() {
  return (
    <Box className="navigation">
      <Drawer variant="permanent" anchor="left" className="navigation__drawer">
        <Toolbar>
          <Typography variant="h6" margin={0} className="navigation__logo">
            <Link to={Dashboard.ADMIN}>Transport school Admin</Link>
          </Typography>
        </Toolbar>
        <Divider />
        <Box py={2} component="nav">
          <Box marginBottom={2}>
            <List className="navigation__list">
              {menuNavigaton.map((item) => {
                return <NavigationMenuItem key={item.id} {...item} />;
              })}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
