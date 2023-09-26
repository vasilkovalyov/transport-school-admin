import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { shortNames } from '@/src/utils/dayNames';

export default function LessonForm() {
  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={6}>
          <TextField
            id="heading"
            label="Heading lesson"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="type-group-label">Type Group</InputLabel>
            <Select
              labelId="type-group-label"
              id="type-group"
              label="Type Group"
            >
              <MenuItem value={0}>Утренняя группа</MenuItem>
              <MenuItem value={1}>Дневная группа</MenuItem>
              <MenuItem value={2}>Вечерняя группа</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="type-lesson-label">Type Lesson</InputLabel>
            <Select
              labelId="type-lesson-label"
              id="type-lesson"
              label="Type Lesson"
            >
              <MenuItem value={0}>онлайн</MenuItem>
              <MenuItem value={1}>оффлайн</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker label="Time schedule end" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="days-shedule-label">Days Shedule start</InputLabel>
            <Select
              labelId="days-shedule-label"
              id="days-shedule"
              label="Days shedule start"
            >
              {shortNames.map(({ name, number }) => (
                <MenuItem value={number} key={number}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="days-shedule-label">Days Shedule end</InputLabel>
            <Select
              labelId="days-shedule-label"
              id="days-shedule"
              label="Days shedule end"
            >
              {shortNames.map(({ name, number }) => (
                <MenuItem value={number} key={number}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TimePicker label="Time schedule start" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TimePicker label="Time schedule end" />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <Box>
        <Button variant="contained" size="medium" color="success">
          Save
        </Button>
      </Box>
    </Box>
  );
}
