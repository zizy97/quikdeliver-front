import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const TotalVehicles = (props) => (
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
            TOTAL VEHICLES
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            810
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <LocalShippingIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
