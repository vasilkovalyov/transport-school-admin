import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { SeoForm } from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import useApiSeo from '@/src/pages/Admin/Pages/hooks/useApiSeo';

export default function Seo() {
  const { data, loading, onHandleUpdate, getAdapterSectionParams } = useApiSeo(
    PageEnum.ABOUT_COURSE
  );

  return (
    <Box>
      <Typography variant="h2">Seo</Typography>
      {loading ? (
        <Box mb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <SeoForm data={getAdapterSectionParams(data)} onUpdate={onHandleUpdate} />
    </Box>
  );
}
