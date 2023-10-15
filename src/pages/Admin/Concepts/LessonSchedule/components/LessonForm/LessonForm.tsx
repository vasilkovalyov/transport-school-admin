import { useEffect, useState } from 'react';
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

import { LessonFormProps } from './LessonForm.type';
import { FormValuesKey, LessonScheduleEditableProps } from '../LessonRow';

const defaultValuesForm: LessonScheduleEditableProps = {
  heading: '',
  type_group: '',
  type_lesson: '',
  time_start: '',
  time_end: '',
  day_start: '',
  day_end: '',
  date_start_event: '',
};

const defaultSelectValues = {
  time_start: '',
  time_end: '',
  day_start: '',
  day_end: '',
  type_group: '',
  type_lesson: '',
};

const valuesKeys: FormValuesKey[] = [
  'heading',
  'type_group',
  'type_lesson',
  'time_start',
  'time_end',
  'day_start',
  'day_end',
  'date_start_event',
];

type SelectTypeKeys = Pick<
  LessonScheduleEditableProps,
  | 'time_start'
  | 'time_end'
  | 'day_start'
  | 'day_end'
  | 'type_group'
  | 'type_lesson'
>;

export default function LessonForm({ data, onSubmit }: LessonFormProps) {
  const [selectValues, setSelectValues] =
    useState<SelectTypeKeys>(defaultSelectValues);
  const { handleSubmit, register, setValue } =
    useForm<LessonScheduleEditableProps>({
      mode: 'onSubmit',
      defaultValues: data ?? defaultValuesForm,
    });

  useEffect(() => {
    if (!data) return;
    fillValues(valuesKeys, data);
  }, [data]);

  function handleSave(data: LessonScheduleEditableProps) {
    onSubmit && onSubmit(data);
  }

  function setSelect(key: string, value: string) {
    setSelectValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function fillValues(
    keys: FormValuesKey[],
    values: LessonScheduleEditableProps
  ) {
    if (!data) return;
    keys.forEach((key) => {
      setValue(key, values[key]);
    });

    setSelectValues((prevState) => ({
      ...prevState,
      day_end: data.day_end,
      day_start: data.day_start,
      time_end: data.time_end,
      time_start: data.time_start,
      type_group: data.type_group,
      type_lesson: data.type_lesson,
    }));
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
            InputLabelProps={{
              shrink: true,
            }}
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
              value={selectValues.type_group}
              onChange={(e) => setSelect('type_group', e.target.value)}
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
              value={selectValues?.type_lesson}
              onChange={(e) => setSelect('type_lesson', e.target.value)}
            >
              <MenuItem value="online">онлайн</MenuItem>
              <MenuItem value="offline">оффлайн</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('date_start_event')}
            id="date_start_event"
            type="date"
            label="Date event end"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
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
              value={selectValues?.day_start}
              onChange={(e) => setSelect('day_start', e.target.value)}
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
              value={selectValues?.day_end}
              onChange={(e) => setSelect('day_end', e.target.value)}
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
            InputLabelProps={{
              shrink: true,
            }}
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
            InputLabelProps={{
              shrink: true,
            }}
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
