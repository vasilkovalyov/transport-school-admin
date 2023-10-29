// libs
import { useRef, useState, ChangeEvent, useEffect } from 'react';
import cn from 'classnames';

// material ui components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import FileUploadIcon from '@mui/icons-material/FileUpload';

// relate utils
import { ImageUploadProps } from './ImageUpload.type';

import './ImageUpload.scss';

export default function ImageUpload({
  image,
  viewType = 'wide',
  width = 60,
  height = 60,
  onChange,
}: ImageUploadProps) {
  const [fileImage, setFileImage] = useState<string>(image ?? '');
  const refFieldInputFile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (image) {
      setFileImage(image);
    }
  }, [image]);

  const viewTypeCn = cn({
    'image-upload--square': viewType === 'square',
    'image-upload--wide': viewType === 'wide',
    'image-upload--avatar': viewType === 'avatar',
  });

  function handleChangeImageFile(e: ChangeEvent<HTMLInputElement>) {
    const file: File | null = e.currentTarget.files && e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file as File);
    fileReader.onloadend = () => {
      const imageString: string = fileReader.result as string;
      setFileImage(imageString);
      onChange(imageString, file || null);
    };
  }

  return (
    <Box className={cn('image-upload', viewTypeCn)}>
      {fileImage ? (
        <Box className="image-upload__preview" mb={4}>
          {viewType !== 'avatar' ? (
            <img
              src={fileImage || ''}
              alt="image"
              width={width}
              height={height}
            />
          ) : (
            <Avatar src={fileImage} sx={{ width: width, height: height }} />
          )}
        </Box>
      ) : null}
      <Box>
        <Button
          onClick={() => refFieldInputFile.current?.click()}
          size="medium"
          color="success"
          variant="contained"
        >
          <FileUploadIcon />
          Upload
        </Button>
        <input
          ref={refFieldInputFile}
          hidden
          type="file"
          accept=".jpg,.jpeg,.png,.svg"
          onChange={handleChangeImageFile}
        />
      </Box>
    </Box>
  );
}
