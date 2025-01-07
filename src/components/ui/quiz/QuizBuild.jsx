import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';

import { QuizStart } from './QuizStart/QuizStart';
import { TitleQuiz, WrapperQuiz } from './Quiz.styled';
import { QuizBar } from './QuizBar/QuizBar';
import { QuizNav } from './QuizNav/QuizNav';
import { QuestionFCEnum, QuestionTypeEnum } from '../../../enum/quiz.enum';
import useWindowWidth from '../../../services/widthScreen';
import { sendQuizToTelegram } from '../../../api/quiz.api';
import { useUtmTags } from '../../../hooks/use-utm-tags';

export const QuizBuild = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  setQuestions,
  title,
}) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const widthScreen = useWindowWidth();
  const utems = useUtmTags();
  const navigate = useNavigate();

  const currQuestion = questions[currentQuestion - 1];
  const Question = QuestionFCEnum[currQuestion.type];

  const sendQuiz = async () => {
    setIsLoading(true);
    const contact = questions.find(i => i.type === QuestionTypeEnum.CONTACT);
    const answers = questions
      .filter(i => i.type !== QuestionTypeEnum.CONTACT)
      .map(i => {
        let answer = i.currentValue;
        if (i.input) answer += `: ${i.input}`;
        return answer;
      });
    try {
      await sendQuizToTelegram(
        {
          answers,
          name: contact.firstName,
          phone: contact.phone,
        },
        utems
      );
      Notify.success('Відправлено успішно');

      navigate('/thanks');
    } catch (error) {
      Notify.failure('Упс..Сталася помилка :(');
      if (error.response.data.message)
        Notify.failure(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isReady ? (
        <QuizStart title={title} setIsReady={setIsReady} />
      ) : (
        <WrapperQuiz>
          <TitleQuiz>Розрахуйте вартість вашої сонячної станції</TitleQuiz>
          <QuizBar currentQuestion={currentQuestion} questions={questions} />
          {Question && (
            <Question
              answersQuiz={questions}
              setAnswersQuiz={setQuestions}
              currentQuestion={currentQuestion}
              widthScreen={widthScreen}
            />
          )}
          <QuizNav
            answersQuiz={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            sendQuiz={sendQuiz}
            isLoading={isLoading}
          />
        </WrapperQuiz>
      )}
    </>
  );
};
