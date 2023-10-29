import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';

import ReactQuill from 'react-quill';

import {
  FormatLessonsFormProps,
  FormatLessonsSectionCheckboxTypes,
  FormatLessonsFormDataType,
} from './FormatLessonsForm.type';

import schemaValidation from './FormatLessonsForm.validation';
import { BlockTogglers } from '../BlockTogglers';

const defaultValuesForm: FormatLessonsFormDataType = {
  heading: '',
  rich_text: '',
  publish: false,
};

export default function FormatLessonsForm({
  data,
  loadingType,
  onCreate,
  onUpdate,
  onPublish,
}: FormatLessonsFormProps) {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  const [checkboxValues, setCheckboxValues] =
    useState<FormatLessonsSectionCheckboxTypes>({
      use_dark_theme: false,
    });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormatLessonsFormDataType>({
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

  function handleSave(params: FormatLessonsFormDataType) {
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
    <Box component="form" maxWidth={800} marginBottom={4}>
      {loadingType === 'loading' ? (
        <Box mb={2}>
          <LinearProgress />
        </Box>
      ) : null}
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
