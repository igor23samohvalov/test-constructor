import { useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Typography,
  RadioGroup,
  Radio,
  TextField,
} from '@mui/material';

const questionErrors = {
  questionTitle: {
    required: 'This field is required',
  }
}

function SingleQuestion({ question, control, errors }) {
  const { title, type } = question;
  const variants = question.variants || {};

  return (
    <Paper sx={{ width: 1, p: 4, mb: '15px' }} elevation={3}>
      <Typography component="div" variant="h5" sx={{ mb: '15px' }}>
        {title}
      </Typography>
      {
        type === 'text' ?
          (
            <Controller
              name={title}
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  placeholder="Answer"
                  label="Answer"
                  margin="dense"
                  fullWidth
                  error={Boolean(errors.questionTitle)}
                  helperText={questionErrors['questionTitle'][errors.questionTitle?.type]}
                  {...field}
                />
              )}
            />
          ) : (
            <FormControl sx={{ m: 1 }}>
              <FormLabel>Answer options:</FormLabel>
              <Controller
                name={title}
                defaultValue={Object.values(variants)[0]}
                control={control}
                rules={{ requried: true }}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                  >
                    {Object?.values(variants)?.map((v) => (
                      <FormControlLabel
                        key={v}
                        value={v}
                        label={v}
                        control={<Radio />}
                      >
                        {v}
                      </FormControlLabel>
                    ))}
                  </RadioGroup>
                )}
              />
            </FormControl>
          )
      }
    </Paper>
  );
};

export default SingleQuestion;