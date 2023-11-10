import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';

import { BlogCard, BlogCardProps } from '../BlogCard';

import { usePostPaginate } from '@/src/hooks/usePostPaginate';

export default function BlogList() {
  const { loading, page, posts, totalPageCount, handleChangePage } =
    usePostPaginate<BlogCardProps>({
      apiUrl: 'posts',
      postSizePage: 8,
    });

  if (loading) {
    return (
      <Box py={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {posts.length ? (
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid key={post._id} item sm={12} lg={4} xl={3} display="flex">
              <BlogCard {...post} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h4">No posts</Typography>
      )}
      {totalPageCount && totalPageCount > 1 ? (
        <Box py={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPageCount}
            page={page}
            shape="rounded"
            onChange={handleChangePage}
          />
        </Box>
      ) : null}
    </Box>
  );
}
