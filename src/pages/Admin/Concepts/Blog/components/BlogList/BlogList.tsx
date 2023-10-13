import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { BlogCard, BlogCardProps } from '../BlogCard';
import Pagination from '@mui/material/Pagination';
import { usePostPaginate } from '@/src/hooks/usePostPaginate';

export default function BlogList() {
  const { posts, totalPageCount, handleChangePage } =
    usePostPaginate<BlogCardProps>({
      apiUrl: 'posts',
      postSizePage: 4,
    });

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
        <Typography>No posts</Typography>
      )}
      {totalPageCount && totalPageCount > 1 ? (
        <Box py={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPageCount}
            shape="rounded"
            onChange={handleChangePage}
          />
        </Box>
      ) : null}
    </Box>
  );
}
