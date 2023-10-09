import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ScheduleFormProps, IScheduleFormData } from './ScheduleForm.type';
import schemaValidation from './ScheduleForm.validation';

const defaultValuesForm: IScheduleFormData = {
  heading: '',
  schedule_number: null,
  publish: false,
};

export default function ScheduleForm({
  data,
  onCreate,
  onUpdate,
  onPublish,
}: ScheduleFormProps) {
  const { handleSubmit, register, setValue } = useForm<IScheduleFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);
    setValue('schedule_number', data?.schedule_number);
  }, [data]);

  function handleSave(params: IScheduleFormData) {
    if (data) {
      onUpdate &&
        onUpdate({
          ...params,
        });
      return;
    }
    onCreate &&
      onCreate({
        ...params,
      });
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Box mb={4}>
        <TextField
          {...register('heading')}
          id="heading"
          label="Heading"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
        />
      </Box>
      <Box mb={4}>
        <TextField
          {...register('schedule_number')}
          id="schedule_number"
          label="Schedule number"
          variant="outlined"
          fullWidth
          type="number"
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={handleSubmit(handleSave)}
        >
          {data ? 'Update' : 'Create'}
        </Button>
        {data ? (
          <Button
            variant="contained"
            size="medium"
            color={data?.publish ? 'info' : 'warning'}
            onClick={() => onPublish && onPublish(!data?.publish)}
          >
            {data?.publish ? 'Unpublish' : 'Publish'}
          </Button>
        ) : null}
      </Stack>
    </Box>
  );
}
