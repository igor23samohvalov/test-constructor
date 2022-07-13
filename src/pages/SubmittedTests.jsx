import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import TestPreview from '../components/TestPreview';

function SubmittedTests() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('tests')) {
      setTests(JSON.parse(localStorage.getItem('tests')))
    }
  }, []);
  console.log(tests)

  return (
    <Grid item md={5} xs={12} sx={{ p: 2 }}>
      {tests.map((t, i) => (
        <TestPreview
          key={i}
          id={i}
          length={t.questions.length}
          title={t.testTitle}
          description={t.testDescription}
        />
      ))}
    </Grid>
  );
};

export default SubmittedTests;