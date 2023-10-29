import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { DynamicFieldTogglers } from '@/src/components';

import { SocialFormDataType, SocialFormItemType } from './SocialForm.type';
import SocialFormService from './SocialForm.service';

const defaultSocialItem: SocialFormItemType = {
  social_icon: '',
  social_url: '',
};

const defaultValuesForm: SocialFormDataType = {
  social_list: [defaultSocialItem],
};

const service = new SocialFormService();

export default function FormSocial() {
  const [loading, setLoading] = useState<boolean>(true);
  const { control, handleSubmit, register, setValue } =
    useForm<SocialFormDataType>({
      mode: 'onSubmit',
      defaultValues: defaultValuesForm,
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'social_list',
    keyName: 'id',
  });

  function handleSave(data: SocialFormDataType) {
    service.update(data);
  }

  function onHandleAddItem() {
    append(defaultSocialItem);
  }

  function onHandleRemoveItem(number: number) {
    remove(number);
  }

  async function loadData() {
    try {
      setLoading(true);
      const response = await service.getInfo();
      setValue('social_list', response.data.social_list);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box>
      {loading ? (
        <Box mb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <Typography variant="h4" marginBottom={2}>
        Social
      </Typography>
      <Box component="form" maxWidth={660} marginBottom={4}>
        <Box mb={2}>
          {fields.map((item, index) => (
            <Box
              key={item.id}
              display="flex"
              alignItems="center"
              gap={2}
              mb={2}
            >
              <FormControl fullWidth>
                <InputLabel id={`social_icon-${index}`}>
                  Social network
                </InputLabel>
                <Select
                  {...register(`social_list.${index}.social_icon`)}
                  labelId={`social_icon-${index}`}
                  id={`social_icon-${index}`}
                  label="Social network"
                  defaultValue={item.social_icon}
                >
                  <MenuItem value="instagram">Instagram</MenuItem>
                  <MenuItem value="whatsapp">Whatsapp</MenuItem>
                  <MenuItem value="facebook">Facebook</MenuItem>
                </Select>
              </FormControl>
              <TextField
                {...register(`social_list.${index}.social_url`)}
                id={`social_url-${index}`}
                label="Social url"
                variant="outlined"
                fullWidth
                defaultValue={item.social_url}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <DynamicFieldTogglers
                fieldLength={fields.length}
                fieldIndex={index}
                fieldAppend={onHandleAddItem}
                fieldRemove={onHandleRemoveItem}
              />
            </Box>
          ))}
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
    </Box>
  );
}
