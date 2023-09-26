import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ReviewForm() {
  const ratingCount = 5;

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={6}>
          <Box mb={4}>
            <TextField id="name" label="Name" variant="outlined" fullWidth />
          </Box>
          <Box mb={4}>
            <TextField
              id="text"
              label="Text"
              variant="outlined"
              fullWidth
              multiline
              rows="6"
            />
          </Box>
          <Box>
            <FormControl>
              <FormLabel id="rating">Rating</FormLabel>
              <RadioGroup
                row
                aria-labelledby="rating"
                name="radio-buttons-group"
              >
                {Array.from(Array(ratingCount).keys()).map((item) => (
                  <FormControlLabel
                    value={item + 1}
                    control={<Radio />}
                    label={item + 1}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
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
