import { useState } from 'react';
import {
  Grid,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Grow,
  Paper,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import TextQ from './TextQ';
import CheckboxQ from './CheckboxQ';

const questionErrors = {
  questionTitle: {
    required: 'This field is required',
  }
}

function QuestionForm({ control, id, errors }) {
  const [questionType, setQuestionType] = useState('text');

  return (
    <Grow in={true} timeout={500}>
      <Paper sx={{ width: 1, p: 4, mb: '15px' }} elevation={3}>
        <Grid
          item
          container
          xs={12}
          justifyContent="space-between"
          sx={{ px: 1 }}
        >
          
          <Grid item xs={12} md={7}>
            <Controller
              name={`questionTitle-${id}`}
              defaultValue="Question without the title"
              control={control}
              rules={{ requried: true }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  placeholder="Name Your Question"
                  label="Question Title"
                  margin="dense"
                  fullWidth
                  error={Boolean(errors.questionTitle)}
                  helperText={questionErrors['questionTitle'][errors.questionTitle?.type]}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl
              sx={{ m: 1 }}
              variant="outlined"
              margin="dense"
              fullWidth
            >
              <InputLabel>Question Type</InputLabel>
              <Controller
                name={`questionType-${id}`}
                control={control}
                defaultValue={questionType}
                rules={{ requried: true }}
                render={({ field }) => (
                    <Select
                      onChange={(e) => {
                        field.onChange(e)
                        setQuestionType(e.target.value)
                      }}
                      label="Question Type"
                      value={questionType}
                    >
                      <MenuItem value="list">
                        One of the list
                      </MenuItem>
                      <MenuItem value="text">
                        Text
                      </MenuItem>
                    </Select>
                )}
              />
            </FormControl>
          </Grid>
          {
            questionType === 'text'
              ? <TextQ control={control} questionId={id} errors={errors} />
              : <CheckboxQ  control={control} questionId={id} errors={errors} />
          }
          
        </Grid>
      </Paper>
    </Grow>
  )
}

export default QuestionForm;