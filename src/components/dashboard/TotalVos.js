import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const TotalVos = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL Vehicle Owners
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            250
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'info.main',
              height: 56,
              width: 56
            }}
          >
            <AccountBoxIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
