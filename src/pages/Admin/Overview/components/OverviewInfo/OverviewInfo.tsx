import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { OverviewInfoProps } from './OverviewInfo.type';

import './OverviewInfo.scss';

export default function OverviewInfo({
  heading,
  icon,
  link,
  value,
}: OverviewInfoProps) {
  return (
    <Paper
      elevation={3}
      className="overview-info"
      style={{ display: 'flex', width: '100%', flex: 1 }}
    >
      <Grid container p={2} columnSpacing={1}>
        <Grid item width="60px">
          <Icon className="overview-info__icon">{icon}</Icon>
        </Grid>
        <Grid item width="100px">
          <Typography style={{ fontSize: '18px' }}>{heading}</Typography>
          <Typography variant="h4">{value}</Typography>
        </Grid>
        {link ? (
          <Grid item xs={12} marginTop="auto">
            <Link to={link.path} className="overview-info__link">
              <Typography component="span">{link.name}</Typography>{' '}
              <ArrowForwardIcon fontSize="small" />
            </Link>
          </Grid>
        ) : null}
      </Grid>
    </Paper>
  );
}
