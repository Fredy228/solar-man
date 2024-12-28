import { useState } from 'react';

import { InnerQuiz } from '../../components/ui/quiz/Quiz.styled';
import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { QuizBuild } from '../../components/ui/quiz/QuizBuild';

const QuizBase = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answersQuiz, setAnswersQuiz] = useState(questions);

  return (
    <GoogleAnalyticsWrapper>
      <InnerQuiz>
        <QuizBuild
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          questions={answersQuiz}
          setQuestions={setAnswersQuiz}
        />
      </InnerQuiz>
    </GoogleAnalyticsWrapper>
  );
};
export default QuizBase;
