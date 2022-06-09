import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

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
            23k
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
            <DirectionsCarFilledIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
