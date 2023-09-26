import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Navigation from '../Navigation/Navigation';
import Avatar from '@mui/material/Avatar';
// import Badge from '@mui/material/Badge';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import './Header.scss';

export default function Header() {
  return (
    <>
      <Paper className="header" component="header">
        <Container className="header__container">
          <Box display="flex" justifyContent="flex-end">
            {/* <Box mx={4} display="flex" alignItems="center">
              <Badge badgeContent={4} color="primary">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </Box> */}
            <Avatar sx={{ width: 34, height: 34 }}>VK</Avatar>
          </Box>
        </Container>
      </Paper>
      <Navigation />
    </>
  );
}
