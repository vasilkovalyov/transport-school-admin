import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function FormAchivment() {
  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="heading"
            label="Heading"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="phone" label="Phone" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="email" label="Email" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6} mb={4}>
          <Box mb={2}>
            <TextField
              id="map-link"
              label="Map link url"
              variant="outlined"
              fullWidth
              multiline
              rows={9}
            />
          </Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.15308103857!2d-77.09697646335972!3d38.89385915491105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2z0JLQsNGI0LjQvdCz0YLQvtC9LCDQntC60YDRg9CzINCa0L7Qu9GD0LzQsdGW0Y8sINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1695653198996!5m2!1suk!2sua"
            width="100%"
            height="212"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
