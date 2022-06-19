import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';

export const PendingRequests = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Pending Requests
          </Typography>
          <Typography color="textPrimary" variant="h4">
            5
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "warning.main",
              height: 56,
              width: 56,
            }}
          >
            <AutorenewIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
