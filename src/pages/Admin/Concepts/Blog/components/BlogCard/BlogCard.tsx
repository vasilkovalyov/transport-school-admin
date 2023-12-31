import { Link, useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { BlogCardProps } from './BlogCard.type';
import { Concepts } from '@/src/constants/routes/concepts';

export default function BlogCard({
  _id,
  image,
  heading,
  short_description,
}: BlogCardProps) {
  const navigate = useNavigate();
  const editLink = `${Concepts.BLOG_EDIT}/${_id}`;

  const cutOfString = (str: string, wordCount: number): string => {
    return str.split(' ').splice(0, wordCount).join(' ') + '...';
  };

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {image ? (
        <CardMedia sx={{ height: 140 }} image={image} title={heading} />
      ) : null}
      <CardContent>
        <Typography gutterBottom variant="h5">
          <Link to={editLink}>{cutOfString(heading, 6)}</Link>
        </Typography>
        {short_description ? (
          <Typography variant="body2" color="text.secondary">
            {cutOfString(short_description, 10)}
          </Typography>
        ) : null}
      </CardContent>
      <Box marginTop="auto">
        <CardActions>
          <Box px={1} pb={2}>
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate(editLink)}
            >
              Edit
            </Button>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
}
