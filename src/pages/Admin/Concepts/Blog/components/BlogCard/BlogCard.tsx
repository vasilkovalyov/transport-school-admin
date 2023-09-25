import { Link, useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { BlogCardProps } from './BlogCard.type';
import { Links } from '@/src/constants/routes';

export default function BlogCard({ _id, image, heading, text }: BlogCardProps) {
  const navigate = useNavigate();
  const editLink = `${Links.ADMIN_BLOG_EDIT}/${_id}`;

  return (
    <Card>
      {image ? (
        <CardMedia sx={{ height: 140 }} image={image} title={heading} />
      ) : null}
      <CardContent>
        <Typography gutterBottom variant="h5">
          <Link to={editLink}>{heading}</Link>
        </Typography>
        {text ? (
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        ) : null}
      </CardContent>
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
    </Card>
  );
}
