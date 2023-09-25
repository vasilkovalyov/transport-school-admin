import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

export default function FaqForm() {
  return (
    <Box component="form" maxWidth={500} marginBottom={4}>
      <Box mb={4}>
        <TextField id="heading" label="Heading" variant="outlined" fullWidth />
      </Box>
      <Typography variant="h4">Faq list</Typography>
      <Box mb={2}>
        <Box mb={2}>
          <TextField
            id="heading-1"
            label="Heading faq"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="social-urltext-faq-1"
            label="Text faq"
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
