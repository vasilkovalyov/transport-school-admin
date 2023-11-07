import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { RegisterAdminType } from './RegistrerAdmin.type';
import { registerAdminValidationSchema } from './RegisterAdmin.validation';
import { AxiosError } from 'axios';
import AuthService from '@/src/services/auth';
import { Links } from '@/src/constants/routes';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const authService = new AuthService();

type PasswordsType = {
  password: boolean;
  confirm_password: boolean;
};

export default function RegisterAdminPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [visiblePassword, setVisiblePassword] = useState<PasswordsType>({
    password: false,
    confirm_password: false,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterAdminType>({
    mode: 'onSubmit',
    resolver: yupResolver(registerAdminValidationSchema),
  });

  async function handleCreateAdmin(params: RegisterAdminType) {
    try {
      setLoading(true);
      const response = await authService.adminRegistration(params);
      if (response.data.message === 'User created') {
        navigate(Links.LOGIN);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        setErrorMessage(e.response?.data.error);
      }
    } finally {
      setLoading(false);
    }
  }
  function handleClickShowPassword(field: keyof PasswordsType, value: boolean) {
    setVisiblePassword((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  }

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
          Create admin
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
              type={visiblePassword.password ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              autoComplete="password"
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        handleClickShowPassword(
                          'password',
                          !visiblePassword.password
                        )
                      }
                      edge="end"
                    >
                      {visiblePassword.password ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register('confirm_password')}
              id="confirm_password"
              type={visiblePassword.confirm_password ? 'text' : 'password'}
              label="Confirm password"
              variant="outlined"
              fullWidth
              autoComplete="confirm_password"
              error={!!errors.confirm_password?.message}
              helperText={errors.confirm_password?.message}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        handleClickShowPassword(
                          'confirm_password',
                          !visiblePassword.confirm_password
                        )
                      }
                      edge="end"
                    >
                      {visiblePassword.confirm_password ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              size="medium"
              onClick={handleSubmit(handleCreateAdmin)}
            >
              {loading ? 'Loading...' : 'Create admin'}
            </Button>
          </Box>
          {errorMessage}
        </Box>
      </Container>
    </Box>
  );
}
