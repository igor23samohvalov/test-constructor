import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import SingleQuestion from './SingleQuestion';
import TestResults from './TestResults';

function SingleTest() {
  const { id } = useParams();
  const [isSubmitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [test, setTest] = useState({});
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('tests'));

    const theTest = data.find(({ testTitle }) => testTitle === id);
    setTest(theTest)
  }, []);

  const onSubmit = (values) => {
    console.log(values)
    const answersNum = test.questions.length;
    const correctAnswersNum = Object.values(values).reduce((acc, cur, i) => {
      if (cur === test.questions[i].answer) acc += 1
      return acc;
    }, 0);

    reset();
    setResult(`${(correctAnswersNum / answersNum) * 100}%`);
    setSubmitted(true);
  }
  if (isSubmitted) return <TestResults result={result} />

  return (
    <Grid item md={5} xs={12} sx={{ p: 2 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container>
          <Grid item xs={12} sx={{ mb: '15px' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography component="div" variant="h3">
                {test.testTitle}
              </Typography>
              <Typography component="div" variant="subtitle1">
                {test.testDescription}
              </Typography>
            </Paper>
          </Grid>
          {test?.questions?.map((q) => (
            <SingleQuestion
              key={q.title}
              question={q}
              control={control}
              errors={errors}  
            />
          ))}
          <Grid item container xs={12} justifyContent="flex-end">
            <Button variant="contained" type="submit" color="success">
              SUBMIT TEST
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SingleTest;