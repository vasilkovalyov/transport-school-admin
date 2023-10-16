import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactQuill from 'react-quill';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

import { ImageUpload } from '@/src/components';

import { BlogFormProps } from './BlogForm.type';
import { transliterateToLatin } from '@/src/utils/convertToSlug';
import { BlockCardEditableProps } from '../BlogCard';
import schemaValidation from './BlogForm.validation';
import 'react-quill/dist/quill.snow.css';

const defaultValuesForm: BlockCardEditableProps = {
  image: '',
  heading: '',
  slug: '',
  short_description: '',
  rich_text: '',
};

export default function BlogForm({ data, onSubmit }: BlogFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  useEffect(() => {
    if (!data) return;
    setValue('heading', data.heading);
    setValue('slug', data.slug);
    setValue('short_description', data.short_description);
    setMarkdownText(data.rich_text || '');
  }, [data]);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<BlockCardEditableProps>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  function handleSave(data: BlockCardEditableProps) {
    onSubmit && onSubmit(data);
  }

  function onChangeRichTextEditor(value: string) {
    setMarkdownText(value);
    setValue('rich_text', value);
  }

  function onChangeHeading(value: string) {
    const convertedStr = transliterateToLatin(value).trim();
    // setSlugText(convertedStr);
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
            error={!!errors['heading']?.message}
            helperText={errors['heading']?.message}
            InputLabelProps={{
              shrink: true,
            }}
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
            error={!!errors['slug']?.message}
            helperText={errors['slug']?.message}
            InputLabelProps={{
              shrink: true,
            }}
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
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <Typography variant="h4">Default post content</Typography>
      <Box mb={4}>
        <ReactQuill
          theme="snow"
          value={markdownText as string}
          onChange={(value) => onChangeRichTextEditor(value)}
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
