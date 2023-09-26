import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

export default function ServiceForm() {
  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={6}>
          <TextField
            id="heading"
            label="Heading service"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="price"
            label="Price"
            variant="outlined"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Top list info</Typography>
          <Box mb={2}>
            <TextField
              id="heading-1"
              label="Heading top list item"
              variant="outlined"
              fullWidth
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
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Bottom list info</Typography>
          <Box mb={2}>
            <TextField
              id="heading-2"
              label="Heading bottom list item"
              variant="outlined"
              fullWidth
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
        </Grid>
      </Grid>
      <Box>
        <Button variant="contained" size="medium" color="success">
          Save
        </Button>
      </Box>
    </Box>
  );
}
