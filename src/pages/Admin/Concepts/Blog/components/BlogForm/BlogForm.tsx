import MDEditor from '@uiw/react-md-editor';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function BlogForm() {
  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={6}>
          <TextField
            id="heading"
            label="Heading post"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="slug" label="Slug" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="short_description"
            label="Short description"
            variant="outlined"
            fullWidth
            multiline
            rows="6"
          />
        </Grid>
      </Grid>
      <Typography variant="h4">Default post content</Typography>
      <Box mb={4}>
        <MDEditor />
      </Box>
      <Box>
        <Button variant="contained" size="medium" color="success">
          Save
        </Button>
      </Box>
    </Box>
  );
}
