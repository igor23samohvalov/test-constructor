import { useState } from 'react';
import {
  Grid,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Button,
  Grow,
  TextField,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Controller } from 'react-hook-form';
import { uniqueId } from 'lodash';

function CheckboxQ({ control, questionId, errors}) {
  const defaultId = uniqueId();
  const [answers, setAnswers] = useState([{ id: defaultId }]);

  const handleRemove = (answId) => {
    const newAnswers = answers.filter(({ id }) => id !== answId)
    setAnswers(newAnswers);
  }
  const handleAdd = () => {
    const newAnswers = [...answers, { id: uniqueId() }]
    setAnswers(newAnswers);
  }

  return (
    <>
      <Grid item xs={12}>
        <FormControl sx={{ width: 1}}>
          <FormLabel id="list-answers">Answers</FormLabel>
          <Controller 
            rules={{ required: true }}
            defaultValue={`q-${questionId}-a-${defaultId}`}
            control={control}
            name={`q-${questionId}-list-answer`}
            render={({ field }) => (
              <RadioGroup
                {...field}
              >
                {answers.map(({ id }) => (
                  <Grow in={true} timeout={500} key={id}>
                    <Grid container sx={{ width: 1 }}>
                      <Grid xs={1} item>
                        <FormControlLabel
                          value={`q-${questionId}-a-${id}`}
                          control={<Radio />}
                          label=""
                        />
                      </Grid>
                      <Grid xs={6} item>
                        <Controller
                          name={`q-${questionId}-a-${id}`}
                          defaultValue=""
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              variant="standard"
                              placeholder="possible answer"
                              fullWidth
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={2} sx={{ ml: 'auto', alignSelf: 'flex-end', cursor: 'pointer' }}>
                        <ClearIcon
                          color="error"
                          onClick={() => handleRemove(id)}
                        />
                      </Grid>
                    </Grid>   
                  </Grow>
                ))}
            </RadioGroup>
            )}
          />
        </FormControl>
        <Button
          sx={{ ml: 'auto' }}
          variant="text"
          color="primary"
          onClick={handleAdd}
          data-type="add"
        >
          ADD ANSWER
        </Button>
      </Grid>
    </>
    
  )
}

export default CheckboxQ