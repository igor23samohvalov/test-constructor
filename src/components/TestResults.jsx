import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

function TestResults({ result }) {
  const bg = Number(result.slice(0, -1)) >= 60
    ? { text: 'Congratulations!', color: '#2e7d32' }
    : { text: 'Try again!', color: '#d32f2f' };

  return (
    <Grid
      item
      md={4}
      xs={12}
      sx={{ mt: '15px'}}
    >
      <Card sx={{ p: 5, bgcolor: bg.color }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5" color="#fff">
            {bg.text}! Your score is: {result}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default TestResults