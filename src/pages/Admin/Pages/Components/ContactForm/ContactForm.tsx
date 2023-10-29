import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

import ReactQuill from 'react-quill';

import { ImageUpload } from '@/src/components';

import { ContactFormProps, ContactFormDataType } from './ContactForm.type';
import schemaValidation from './ContactForm.validation';
import { BlockTogglers } from '../BlockTogglers';

const defaultValuesForm: ContactFormDataType = {
  heading: '',
  rich_text: '',
  form_heading: '',
  require_message: '',
  image: '',
  publish: false,
};

export default function ContactForm({
  data,
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: ContactFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  const { handleSubmit, register, setValue } = useForm<ContactFormDataType>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);
    setValue('form_heading', data?.form_heading);
    setValue('require_message', data?.require_message);

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

  function handleSave(params: ContactFormDataType) {
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
      <Grid container columnSpacing={4}>
        <Grid item xs={12}>
          {loadingType === 'loading' ? (
            <Box mb={4}>
              <LinearProgress />
            </Box>
          ) : null}
        </Grid>
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
          <Box mb={4}>
            <TextField
              {...register('form_heading')}
              id="form_heading"
              label="Form heading"
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
              {...register('require_message')}
              id="require_message"
              label="Require message"
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
