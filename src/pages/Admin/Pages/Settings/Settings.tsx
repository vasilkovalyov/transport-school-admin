import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { FormContacts, FormSocial } from './components';

export default function PageSettings() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1" marginBottom={4}>
          Page settings
        </Typography>
        <Box marginBottom={4}>
          <Divider />
        </Box>
        <FormContacts />
        <Box marginBottom={4}>
          <Divider />
        </Box>
        <FormSocial />
      </Container>
    </Box>
  );
}
