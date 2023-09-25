import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginPage() {
  return (
    <Box
      component="section"
      className="section-login"
      py={4}
      flex={1}
      display="flex"
      alignItems="center"
    >
      <Container>
        <Typography variant="h1" textAlign="center" mb={4}>
          Sign In To Admin
        </Typography>
        <Box component="form" maxWidth={500} mx="auto" marginBottom={8}>
          <Box mb={2}>
            <TextField id="login" label="Login" variant="outlined" fullWidth />
          </Box>
          <Box mb={2}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box textAlign="center">
            <Button variant="contained" size="medium">
              Sign in
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
