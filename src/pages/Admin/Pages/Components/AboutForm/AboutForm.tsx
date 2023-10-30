import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

import ReactQuill from 'react-quill';

import { AboutFormProps, AboutFormDataType } from './AboutForm.type';
import schemaValidation from './AboutForm.validation';
import { BlockTogglers } from '../BlockTogglers';

const defaultValuesForm: AboutFormDataType = {
  heading: '',
  rich_text: '',
  publish: false,
};

export default function AboutForm({
  data,
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: AboutFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<AboutFormDataType>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);

    if (data.rich_text) {
      setMarkdownText(data.rich_text);
    }
  }, [data]);

  function onChangeRichTextEditor(value: string) {
    setMarkdownText(value);
    setValue('rich_text', value);
  }

  function handleSave(params: AboutFormDataType) {
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
    <Box component="form" marginBottom={4}>
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
          error={!!errors['heading']?.message}
          helperText={errors['heading']?.message}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box mb={4}>
        <ReactQuill
          theme="snow"
          value={markdownText as string}
          onChange={(value) => onChangeRichTextEditor(value)}
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
