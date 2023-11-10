import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { shortNames } from '@/src/utils/dayNames';

import { FormValuesKey, LessonFormProps } from './LessonForm.type';
import schemaValidation from './LessonForm.validation';
import {
  adaptArrayDaysToObject,
  adaptObjectDaysToArray,
} from '../../LessonSchedule.utils';
import { LessonEditProps } from '@/src/types/lesson';

const defaultValuesForm: LessonEditProps = {
  heading: '',
  type_group: '',
  type_lesson: '',
  time_start: '',
  time_end: '',
  date_start_event: '',
  max_people: 0,
  days: [],
};

const defaultSelectValues = {
  time_start: '',
  time_end: '',
  type_group: '',
  type_lesson: '',
  days: [],
};

const valuesKeys: FormValuesKey[] = [
  'heading',
  'type_group',
  'type_lesson',
  'time_start',
  'time_end',
  'days',
  'date_start_event',
  'max_people',
];

type SelectTypeKeys = Pick<
  LessonEditProps,
  'time_start' | 'time_end' | 'days' | 'type_group' | 'type_lesson'
>;

type WorkDay = Record<number, boolean>;

export default function LessonForm({ data, onSubmit }: LessonFormProps) {
  const [selectValues, setSelectValues] =
    useState<SelectTypeKeys>(defaultSelectValues);
  const [checkboxDays, setCheckboxDays] = useState<WorkDay>({});

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<LessonEditProps>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    const { days, ...params } = data;
    fillValues(valuesKeys, params);
    if (days) {
      setCheckboxDays(adaptArrayDaysToObject(days));
    }
  }, [data]);

  function handleSave(data: LessonEditProps) {
    onSubmit &&
      onSubmit({
        ...data,
        days: adaptObjectDaysToArray(checkboxDays),
      });
  }

  function setSelect(key: string, value: string) {
    setSelectValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function fillValues(keys: FormValuesKey[], values: LessonEditProps) {
    if (!data) return;
    keys.forEach((key) => {
      setValue(key, values[key]);
    });

    setSelectValues((prevState) => ({
      ...prevState,
      days: data.days,
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
            error={!!errors['heading']?.message}
            helperText={errors['heading']?.message}
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
              error={!!errors['type_group']?.message}
            >
              <MenuItem value="morning">Утренняя группа</MenuItem>
              <MenuItem value="midday">Дневная группа</MenuItem>
              <MenuItem value="night">Вечерняя группа</MenuItem>
            </Select>
            {errors['type_group']?.message ? (
              <FormHelperText>{errors['type_group']?.message}</FormHelperText>
            ) : null}
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
              error={!!errors['type_lesson']?.message}
            >
              <MenuItem value="online">онлайн</MenuItem>
              <MenuItem value="offline">оффлайн</MenuItem>
            </Select>
            {errors['type_lesson']?.message ? (
              <FormHelperText>{errors['type_lesson']?.message}</FormHelperText>
            ) : null}
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
            error={!!errors['date_start_event']?.message}
            helperText={errors['date_start_event']?.message}
          />
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
            error={!!errors['time_start']?.message}
            helperText={errors['time_start']?.message}
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
            error={!!errors['time_end']?.message}
            helperText={errors['time_end']?.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('max_people')}
            id="max_people"
            label="Max people"
            variant="outlined"
            fullWidth
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            error={!!errors['max_people']?.message}
            helperText={errors['max_people']?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="day">Work days</InputLabel>
          {shortNames.map((day, index) => (
            <FormControlLabel
              key={day.name}
              control={
                <Checkbox
                  checked={checkboxDays[index] || false}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setCheckboxDays((prevState) => ({
                      ...prevState,
                      [day.number]: e.currentTarget.checked,
                    }));
                  }}
                  color="success"
                />
              }
              label={day.name}
            />
          ))}
        </Grid>
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
