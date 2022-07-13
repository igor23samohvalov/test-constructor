import { Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const answerErrors = {
  answer: {
    required: 'This field is required',
  }
}

function TextQ({ control, questionId, errors }) {

  return (
    <Grid item xs={12}>
      <Controller
        name={`q-${questionId}-text-answer`}
        defaultValue=""
        control={control}
        rules={{ requried: true }}
        render={({ field }) => (
          <TextField
            variant="standard"
            placeholder="Answer"
            label="Answer"
            margin="dense"
            fullWidth
            error={Boolean(errors.answer)}
            helperText={answerErrors['answer'][errors.answer?.type]}
            {...field}
          />
        )}
      />
    </Grid>
  )
}

export default TextQ