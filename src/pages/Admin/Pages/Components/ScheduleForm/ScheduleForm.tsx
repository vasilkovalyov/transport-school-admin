import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

import { ScheduleFormProps, ScheduleFormDataType } from './ScheduleForm.type';
import schemaValidation from './ScheduleForm.validation';
import { BlockTogglers } from '../BlockTogglers';

const defaultValuesForm: ScheduleFormDataType = {
  heading: '',
  post_number: null,
  publish: false,
};

export default function ScheduleForm({
  data,
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: ScheduleFormProps) {
  const { handleSubmit, register, setValue } = useForm<ScheduleFormDataType>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);
    setValue('post_number', data?.post_number);
  }, [data]);

  function handleSave(params: ScheduleFormDataType) {
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
      {loadingType === 'loading' ? (
        <Box mb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <Box mb={4}>
        <TextField
          {...register('heading')}
          id="heading"
          label="Heading"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box mb={4}>
        <TextField
          {...register('post_number')}
          id="post_number"
          label="Schedule number"
          variant="outlined"
          fullWidth
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <BlockTogglers
        typeToggle={!data ? 'create' : 'update'}
        publish={data?.publish}
        loadingType={loadingType}
        showPublishButton={data !== null}
        onSubmit={handleSubmit(handleSave)}
        onPublish={onPublish}
      />
    </Box>
  );
}
