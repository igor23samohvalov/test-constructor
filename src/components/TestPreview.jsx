import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

function TestPreview({ title, description, length }) {
  return (
    <Card elevation={3} sx={{ width: 1, p: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          questions: {length}
        </Typography>
        <Typography variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
        >
          <NavLink to={title}>ПРОЙТИ ТЕСТ</NavLink>
        </Button>
      </CardActions>
    </Card>
  );
};

export default TestPreview;