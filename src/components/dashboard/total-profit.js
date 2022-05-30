import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const TotalProfit = (props) => (
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
            PRIVATE DATASETS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            23k
          </Typography>
        </Grid>
        
      </Grid>
    </CardContent>
  </Card>
);
