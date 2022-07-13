const normalize = (data) => {
  const questions = [];

  const { testTitle, testDescription } = data;
  const questionTitles = Object.keys(data)
    .filter((k) => k.includes('questionTitle'))

  questionTitles.forEach((title) => {
    const qId = title.split('-')[1];

    const question = {
      title: data[title],
      type: data[`questionType-${qId}`],
    };
    if (question.type === 'text') {
      question.answer = data[`q-${qId}-text-answer`];
    } else {
      question.variants = Object.fromEntries(Object.entries(data)
        .filter(([key, _]) => key.includes(`q-${qId}-a`)))
      question.answer = data[data[`q-${qId}-list-answer`]];
    }
    questions.push(question);
  });
  return { testTitle, testDescription, questions };
};

export default normalize;