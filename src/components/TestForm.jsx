import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Paper,
  Button,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import QuestionForm from './QuestionForm';
import normalize from '../ultility/normalize';

const errorsTest = {
  testTitle: {
    required: 'The field is required',
  },
}

function TestForm() {
  const [questions, setQuestions] = useState([{ id: 0 }]);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const onSubmit = (values) => {
    const data = normalize(values);
    if (localStorage.getItem('tests')) {
      const tempData = JSON.parse(localStorage.getItem('tests'));
      tempData.push(data);
      localStorage.setTitem('tests', JSON.stringify(tempData));
    } else {
      localStorage.setItem('tests', JSON.stringify([data]));
    }
    reset();
    setQuestions([]);
  };

  const handleClick = () => {
    const id = (-1 && questions[questions.length - 1]?.id) + 1;
    const newQuestions = [...questions, { id }];
    setQuestions(newQuestions);
  }

  return (
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container>
          <Grid item xs={12} sx={{ mb: '15px' }}>
            <Paper elevation={3} sx={{ p: 4 }} >
              <Controller
                name="testTitle"
                defaultValue="New Test"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    variant="standard"
                    label="Test Title"
                    placeholder="Name Your Test"
                    size="normal"
                    margin="dense"
                    fullWidth
                    error={Boolean(errors.testTitle)}
                    helperText={errorsTest['testTitle'][errors.testTitle?.type]}
                    {...field}
                  />
                )}
              />
              <Controller
                name="testDescription"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    multiline
                    rows={2}
                    variant="outlined"
                    label="Description"
                    size="normal"
                    placeholder="Description"
                    margin="dense"
                    fullWidth
                    {...field}
                  />
                )}
              />    
            </Paper>
          </Grid>
          {questions.map(({ id }) => (
              <QuestionForm
                key={id}
                control={control}
                id={id}
                errors={errors}
              />
            ))}
          <Grid item container xs={12} justifyContent="space-between">
            <Button variant="contained" onClick={handleClick}>
              Add Question
            </Button>
            <Button variant="contained" color="success" type="submit">
              Submit Test
            </Button>
          </Grid>
        </Grid>
      </Box>

  );
};

export default TestForm;