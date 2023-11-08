import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '@/src/redux/hooks';
import { saveAdmin } from '@/src/redux/slices';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { LoginType } from './Login.type';
import { loginValidationSchema } from './Login.validation';
import { AxiosError } from 'axios';
import AuthService from '@/src/services/auth';
import { Dashboard } from '@/src/constants/routes/dashboard';

const authService = new AuthService();

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginType>({
    mode: 'onSubmit',
    resolver: yupResolver(loginValidationSchema),
  });

  async function handleLogin(params: LoginType) {
    try {
      setLoading(true);
      const response = await authService.login(params);
      dispatch(saveAdmin(response.data));
      localStorage.setItem('token', response.data.token);
      navigate(Dashboard.ADMIN);
    } catch (e) {
      if (e instanceof AxiosError) {
        setErrorMessage(e.response?.data.error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function hasAdminLoad() {
    const response = await authService.hasAdmin();
    if (!response.data.hasAdmin) {
      navigate(Dashboard.REGISTRATION_ADMIN);
    }
  }

  useEffect(() => {
    hasAdminLoad();
  }, []);

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
            <TextField
              {...register('login')}
              id="login"
              label="Login"
              variant="outlined"
              fullWidth
              error={!!errors.login?.message}
              helperText={errors.login?.message}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register('password')}
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              size="medium"
              onClick={handleSubmit(handleLogin)}
            >
              {loading ? 'Loading...' : 'Sign in'}
            </Button>
          </Box>
          {errorMessage}
        </Box>
      </Container>
    </Box>
  );
}
