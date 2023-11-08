import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { StudentInfoType } from './StudentInfo.type';

export default function StudentInfo({ email, name, phone }: StudentInfoType) {
  return (
    <Box>
      <Typography variant="h6">Email - {email}</Typography>
      <Typography variant="h6">Name - {name}</Typography>
      <Typography variant="h6">Phone - {phone}</Typography>
    </Box>
  );
}
