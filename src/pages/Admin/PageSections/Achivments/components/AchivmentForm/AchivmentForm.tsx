import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

export default function AchivmentForm() {
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
          <TextField
            id="subheading"
            label="Subheading"
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>
      <Typography variant="h4">Achivment list</Typography>
      <Box mb={2}>
        <Box mb={2}>
          <TextField
            id="heading-1"
            label="Heading achivment"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="social-urltext-faq-1"
            label="Text achivment"
            variant="outlined"
            multiline
            fullWidth
            rows={4}
          />
        </Box>
        <Stack spacing={2} direction="row">
          <Button variant="contained" size="medium">
            <AddCircleOutlineOutlinedIcon />
          </Button>
          <Button variant="contained" size="medium">
            <RemoveCircleOutlineOutlinedIcon />
          </Button>
        </Stack>
      </Box>
      <Box>
        <Button variant="contained" size="medium" color="success">
          Save
        </Button>
      </Box>
    </Box>
  );
}
