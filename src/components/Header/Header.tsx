import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navigation from '../Navigation/Navigation';
// import Badge from '@mui/material/Badge';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import './Header.scss';
import { Dashboard } from '@/src/constants/routes/dashboard';

export default function Header() {
  const navigate = useNavigate();

  function onHandleLogOut() {
    localStorage.removeItem('token');
    navigate(Dashboard.LOGIN);
  }

  return (
    <>
      <Paper className="header" component="header">
        <Container className="header__container">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingLeft={30}
          >
            <Typography variant="h5" marginBottom={0}>
              Admin
            </Typography>
            {/* <Box mx={4} display="flex" alignItems="center">
              <Badge badgeContent={4} color="primary">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </Box> */}
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => onHandleLogOut()}
            >
              Logout
            </Button>
          </Box>
        </Container>
      </Paper>
      <Navigation />
    </>
  );
}
