import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

import {
  StructEducationFormProps,
  IStructEducationFormData,
  IStructEducationData,
} from './StructEducationForm.type';
import schemaValidation from './StructEducationForm.validation';
import { useEffect } from 'react';
import { BlockTogglers } from '../BlockTogglers';

const defaultStructEducationItem: IStructEducationData = {
  heading: '',
  rich_text: '',
};

const defaultValuesForm: IStructEducationFormData = {
  heading: '',
  struct_education_list: [defaultStructEducationItem],
  publish: false,
};

export default function StructEducationForm({
  data,
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: StructEducationFormProps) {
  const { handleSubmit, register, setValue } =
    useForm<IStructEducationFormData>({
      mode: 'onSubmit',
      defaultValues: data ?? defaultValuesForm,
      resolver: yupResolver(schemaValidation),
    });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);
  }, [data]);

  function handleSave(params: IStructEducationFormData) {
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
