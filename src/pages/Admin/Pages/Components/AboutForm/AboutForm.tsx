import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { AboutFormProps, IAboutFormData } from './AboutForm.type';
import schemaValidation from './AboutForm.validation';

const defaultValuesForm: IAboutFormData = {
  heading: '',
  rich_text: '',
  publish: false,
};

export default function AboutForm({
  data,
  onCreate,
  onUpdate,
  onPublish,
}: AboutFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  const { handleSubmit, register, setValue } = useForm<IAboutFormData>({
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

  function handleSave(params: IAboutFormData) {
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
            <MDEditor
              onChange={(value) => onChangeRichTextEditor(value as string)}
              value={markdownText || ''}
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
        </Grid>
      </Grid>
    </Box>
  );
}
