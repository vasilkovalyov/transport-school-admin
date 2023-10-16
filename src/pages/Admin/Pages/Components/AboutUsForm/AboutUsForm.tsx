import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

import ReactQuill from 'react-quill';

import { ImageUpload } from '@/src/components';

import { AboutUsFormProps, IAboutUsFormData } from './AboutUsForm.type';
import schemaValidation from './AboutUsForm.validation';
import { BlockTogglers } from '../BlockTogglers';

const defaultValuesForm: IAboutUsFormData = {
  image: '',
  heading: '',
  rich_text: '',
  publish: false,
};

export default function AboutUsForm({
  data,
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: AboutUsFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<IAboutUsFormData>({
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

  function onUploadImage(image: string) {
    setValue('image', image);
  }

  function onChangeRichTextEditor(value: string) {
    setMarkdownText(value);
    setValue('rich_text', value);
  }

  function handleSave(params: IAboutUsFormData) {
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
        <Box mb={2}>
          <LinearProgress />
        </Box>
      ) : null}
      <Grid container columnSpacing={4}>
        <Grid item xs={12} lg={7} xl={7}>
          <Box mb={4}>
            <TextField
              {...register('heading')}
              id="heading"
              label="Heading"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              defaultValue={data?.heading}
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
        </Grid>
        <Grid item xs={12} lg={5}>
          <Box mb={4}>
            <ImageUpload
              viewType="square"
              image={data?.image}
              onChange={onUploadImage}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
