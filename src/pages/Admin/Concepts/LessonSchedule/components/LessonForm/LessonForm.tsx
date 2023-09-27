import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { shortNames } from '@/src/utils/dayNames';

import {
  LessonFormProps,
  ILessonFormData,
  FormValuesKey,
} from './LessonForm.type';

const defaultValuesForm: ILessonFormData = {
  heading: '',
  time_end: '',
  time_start: '',
  type_group: '',
  type_lesson: '',
  date_end: '',
  day_end: null,
  day_start: null,
};

const valuesKeys: FormValuesKey[] = [
  'heading',
  'time_end',
  'time_start',
  'type_group',
  'type_lesson',
  'date_end',
  'day_end',
  'day_start',
];

export default function LessonForm({ data, onSubmit }: LessonFormProps) {
  const { handleSubmit, register, setValue } = useForm<ILessonFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  useEffect(() => {
    if (!data) return;
    fillValues(valuesKeys);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function handleSave(data: ILessonFormData) {
    console.log(data);
    onSubmit && onSubmit(data);
  }

  function fillValues(values: FormValuesKey[]) {
    if (!data) return;
    values.map((item) => setValue(item, data[item]));
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('heading')}
            id="heading"
            label="Heading lesson"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="type_group">Type Group</InputLabel>
            <Select
              {...register('type_group')}
              labelId="type_group"
              id="type_group"
              label="Type Group"
              defaultValue={data?.type_group}
            >
              <MenuItem value="morning">Утренняя группа</MenuItem>
              <MenuItem value="midday">Дневная группа</MenuItem>
              <MenuItem value="night">Вечерняя группа</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="type_lesson">Type Lesson</InputLabel>
            <Select
              {...register('type_lesson')}
              labelId="type_lesson"
              id="type_lesson"
              label="Type Lesson"
              defaultValue={data?.type_lesson}
            >
              <MenuItem value="online">онлайн</MenuItem>
              <MenuItem value="offline">оффлайн</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('date_end')}
            id="date_end"
            type="date"
            label="Date event end"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="day_start">Days Shedule start</InputLabel>
            <Select
              {...register('day_start')}
              labelId="day_start"
              id="day_start"
              label="Days shedule start"
              defaultValue={data?.day_start}
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
            <InputLabel id="day_end">Days Shedule end</InputLabel>
            <Select
              {...register('day_end')}
              labelId="day_end"
              id="day_end"
              label="Days shedule end"
              defaultValue={data?.day_end}
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
          <TextField
            {...register('time_start')}
            id="time_start"
            label="Time schedule start"
            variant="outlined"
            fullWidth
            type="time"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('time_end')}
            id="time_end"
            label="Time schedule end"
            variant="outlined"
            fullWidth
            type="time"
          />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <Box>
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={handleSubmit(handleSave)}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
