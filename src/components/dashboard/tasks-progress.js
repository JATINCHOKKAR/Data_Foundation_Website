import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

export const TasksProgress = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            PUBLIC DATASET 
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            75
          </Typography>
        </Grid>
        
      </Grid>
      
    </CardContent>
  </Card>
);
