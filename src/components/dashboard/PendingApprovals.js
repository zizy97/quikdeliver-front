import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import PendingActionsIcon from '@mui/icons-material/PendingActions';

export const PendingApprovals = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Pending Approvals
          </Typography>
          <Typography color="textPrimary" variant="h4">
            10
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <PendingActionsIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
