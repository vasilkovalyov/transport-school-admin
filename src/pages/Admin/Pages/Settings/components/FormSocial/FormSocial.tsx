import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

export default function FormSocial() {
  return (
    <Box>
      <Typography variant="h4" marginBottom={2}>
        Social
      </Typography>
      <Box component="form" maxWidth={660} marginBottom={4}>
        <Box mb={2}>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Social network
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Social network"
              >
                <MenuItem value={10}>Instagram</MenuItem>
                <MenuItem value={20}>Whatsapp</MenuItem>
                <MenuItem value={30}>Facebook</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="social-url"
              label="Social url"
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" size="medium">
              <RemoveCircleOutlineOutlinedIcon />
            </Button>
            <Button variant="contained" size="medium">
              <AddCircleOutlineOutlinedIcon />
            </Button>
          </Box>
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
