import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FormContacts() {
  return (
    <Box>
      <Typography variant="h4" marginBottom={2}>
        Contacts
      </Typography>
      <Box component="form" maxWidth={500} marginBottom={4}>
        <Box mb={2}>
          <TextField id="email" label="Email" variant="outlined" fullWidth />
        </Box>
        <Box mb={2}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField id="phone" label="Phone" variant="outlined" fullWidth />
        </Box>
        <Box>
          <Button variant="contained" size="medium" color="success">
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
