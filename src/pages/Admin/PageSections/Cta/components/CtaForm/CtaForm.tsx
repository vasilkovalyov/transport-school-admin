import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CtaForm() {
  return (
    <Box component="form" maxWidth={500} marginBottom={4}>
      <Box mb={4}>
        <Box mb={2}>
          <TextField
            id="heading"
            label="Heading"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={<Checkbox />}
            label="Use link to contact page"
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel control={<Checkbox />} label="Use phone cta" />
        </Box>
      </Box>
      <Box>
        <Button variant="contained" size="medium" color="success">
          Save
        </Button>
      </Box>
    </Box>
  );
}
