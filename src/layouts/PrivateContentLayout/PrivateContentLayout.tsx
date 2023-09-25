import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { PrivateContentLayoutProps } from './PrivateContentLayout.type';

export default function PrivateContentLayout({
  heading,
  children,
}: PrivateContentLayoutProps) {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1" marginBottom={4}>
          {heading}
        </Typography>
        <Box className="section__body">{children}</Box>
      </Container>
    </Box>
  );
}
