import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

import ReactQuill from 'react-quill';

import {
  AboutCourseFormProps,
  AboutCourseFormDataType,
} from './AboutCourseForm.type';
import schemaValidation from './AboutCourseForm.validation';
import { BlockTogglers } from '../BlockTogglers';

const defaultValuesForm: AboutCourseFormDataType = {
  heading: '',
  rich_text: '',
  publish: false,
};

export default function AboutCourseForm({
  data,
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: AboutCourseFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<AboutCourseFormDataType>({
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

  function handleSave(params: AboutCourseFormDataType) {
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
    <Box>
      <Box>
        {loadingType === 'loading' ? (
          <Box mb={2}>
            <LinearProgress />
          </Box>
        ) : null}
      </Box>
      <Box>
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
    </Box>
  );
}
