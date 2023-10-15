import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MDEditor from '@uiw/react-md-editor';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import {
  FormatLessonsFormProps,
  FormatLessonsSectionCheckboxTypes,
  IFormatLessonsFormData,
} from './FormatLessonsForm.type';

import schemaValidation from './FormatLessonsForm.validation';

const defaultValuesForm: IFormatLessonsFormData = {
  heading: '',
  rich_text: '',
  publish: false,
};

export default function FormatLessonsForm({
  data,
  onCreate,
  onUpdate,
  onPublish,
}: FormatLessonsFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  const [checkboxValues, setCheckboxValues] =
    useState<FormatLessonsSectionCheckboxTypes>({
      use_dark_theme: false,
    });

  const { handleSubmit, register, setValue } = useForm<IFormatLessonsFormData>({
    mode: 'onSubmit',
    defaultValues: data ?? defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (!data) return;
    setValue('heading', data?.heading);
    setCheckboxValues({
      use_dark_theme: data?.use_dark_theme || false,
    });

    if (data.rich_text) {
      setMarkdownText(data.rich_text);
    }
  }, [data]);

  function onChangeRichTextEditor(value: string) {
    setMarkdownText(value);
    setValue('rich_text', value);
  }

  function handleSave(params: IFormatLessonsFormData) {
    if (data) {
      onUpdate &&
        onUpdate({
          ...params,
          use_dark_theme: checkboxValues.use_dark_theme,
        });
      return;
    }
    onCreate &&
      onCreate({
        ...params,
        use_dark_theme: checkboxValues.use_dark_theme,
      });
  }

  function onChangeCheckbox(
    field: keyof FormatLessonsSectionCheckboxTypes,
    checked: boolean
  ) {
    setCheckboxValues((prev) => {
      return {
        ...prev,
        [field]: checked,
      };
    });
  }

  return (
    <Box>
      <Box component="form" maxWidth={800} marginBottom={4}>
        <Box mb={4}>
          <Typography>Theme</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxValues.use_dark_theme}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeCheckbox('use_dark_theme', e.target.checked)
                }
                color="success"
              />
            }
            label="Use dark theme"
          />
        </Box>
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
      </Box>
    </Box>
  );
}
