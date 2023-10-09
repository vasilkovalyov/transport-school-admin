import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { SeoForm } from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import useApiSeo from '@/src/pages/Admin/Pages/hooks/useApiSeo';

export default function Seo() {
  const { data, onHandleUpdate, getAdapterSectionParams } = useApiSeo(
    PageEnum.CONTACT
  );

  return (
    <Box>
      <Typography variant="h2">Seo</Typography>
      <SeoForm data={getAdapterSectionParams(data)} onUpdate={onHandleUpdate} />
    </Box>
  );
}
