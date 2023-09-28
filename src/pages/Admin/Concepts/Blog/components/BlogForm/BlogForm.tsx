import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

import { ImageUpload } from '@/src/components';

import { BlogFormProps, IBlogFormData } from './BlogForm.type';
import { transliterateToLatin } from '@/src/utils/convertToSlug';

const defaultValuesForm: IBlogFormData = {
  image: '',
  heading: '',
  rich_text: '',
  slug: '',
  short_description: '',
};

export default function BlogForm({ data, onSubmit }: BlogFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);
  const [slugText, setSlugText] = useState<string>('');

  useEffect(() => {
    if (!data) return;
    setSlugText(transliterateToLatin(data.heading));
    setMarkdownText(data.rich_text);
  }, [data]);

  const { handleSubmit, register, setValue } = useForm<IBlogFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
  });

  function handleSave(data: IBlogFormData) {
    console.log(data);
    onSubmit && onSubmit(data);
  }

  function onChangeRichTextEditor(value: string) {
    setMarkdownText(value);
    setValue('rich_text', value);
  }

  function onChangeHeading(value: string) {
    const convertedStr = transliterateToLatin(value);
    setSlugText(convertedStr);
    setValue('slug', convertedStr);
  }

  function onUploadImage(image: string) {
    setValue('image', image);
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12}>
          <ImageUpload
            viewType="wide"
            image={data?.image}
            onChange={onUploadImage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('heading')}
            id="heading"
            label="Heading post"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            onChange={(e) => onChangeHeading(e.currentTarget.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('slug')}
            id="slug"
            label="Slug"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            value={slugText}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('short_description')}
            id="short_description"
            label="Short description"
            variant="outlined"
            fullWidth
            multiline
            rows="6"
          />
        </Grid>
      </Grid>
      <Typography variant="h4">Default post content</Typography>
      <Box mb={4}>
        <MDEditor
          onChange={(value) => onChangeRichTextEditor(value as string)}
          value={markdownText || ''}
        />
      </Box>
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
