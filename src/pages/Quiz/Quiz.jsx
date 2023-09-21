import { useState } from 'react';
import { InnerQuiz, TitleQuiz, WrapperQuiz } from './Quiz.styled';
import { QuizBar } from '../../components/QuizParts/QuizBar/QuizBar';
import { QuizNav } from '../../components/QuizParts/QuizNav/QuizNav';
import { QuizBodyOne } from '../../components/QuizParts/QuizBody/QuizBodyOne/QuizBodyOne';
import { QuizBodyTwo } from '../../components/QuizParts/QuizBody/QuizBodyTwo/QuizBodyTwo';
import { QuizBodyTree } from '../../components/QuizParts/QuizBody/QuizBodyTree/QuizBodyTree';
import { QuizBodyFour } from '../../components/QuizParts/QuizBody/QuizBodyFour/QuizBodyFour';
import { QuizBodyFive } from '../../components/QuizParts/QuizBody/QuizBodyFive/QuizBodyFive';
import useWindowWidth from '../../services/widthScreen';
import { sendQuizToTelegram } from '../../components/API/API';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { QuizStart } from '../../components/QuizParts/QuizStart/QuizStart';

const questions = [
  {
    id: 1,
    name: 'Для чого встановлюється станція?',
    answers: [
      'Підприємство (офіс, ТРЦ, готель, ресторан)',
      'Власний будинок',
      'Заробіток на зеленому тарифі',
    ],
    currentAnswer: null,
    currentValue: null,
  },
  {
    id: 2,
    name: 'Яку потребу вирішуємо?',
    answers: [
      'Повна незалежність від електромережі',
      'Компенсація частини споживання',
      'Резервне живлення',
      'Пасивний дохід',
    ],
    currentAnswer: null,
    currentValue: null,
  },
  {
    id: 3,
    name: 'Яка потужність вас цікавить?',
    answers: [],
    currentAnswer: [5],
    currentValue: 'до 5 кВт',
  },
  {
    id: 4,
    name: 'Вкажіть ваше місто',
    answers: ['Одеса', 'Миколаїв', 'Область', 'Інше'],
    currentAnswer: null,
    currentValue: null,
    country: '',
  },
  {
    id: 5,
    name: 'Вкажіть Ім’я та номер телефону',
    answers: [],
    currentAnswer: 1,
    firstName: '',
    phone: '',
    email: '',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answersQuiz, setAnswersQuiz] = useState(questions);
  const widthScreen = useWindowWidth();
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sendQuiz = async () => {
    const forWhat = answersQuiz[0].currentValue;
    const problem = answersQuiz[1].currentValue;
    const power = answersQuiz[2].currentValue;
    const country = answersQuiz[3].currentValue;
    const whichCountry = answersQuiz[3].country;
    const name = answersQuiz[4].firstName;
    const phone = answersQuiz[4].phone;
    const email = answersQuiz[4].email;
    try {
      setIsLoading(true);

      await sendQuizToTelegram({
        forWhat,
        problem,
        power,
        country,
        whichCountry,
        name,
        phone,
        email,
      });

      setAnswersQuiz(questions);
      Notify.success('Відправлено успішно');
      setIsLoading(false);
      navigate('/thanks');
    } catch (error) {
      setIsLoading(false);
      Notify.failure('Упс..Сталася помилка :(');
      if (error.response.data.message)
        Notify.failure(error.response.data.message);
    }
  };

  return (
    <GoogleAnalyticsWrapper>
      <InnerQuiz>
        {!isReady ? (
          <QuizStart setIsReady={setIsReady} />
        ) : (
          <WrapperQuiz>
            <TitleQuiz>Розрахуйте вартість вашої сонячної станції</TitleQuiz>
            <QuizBar
              currentQuestion={currentQuestion}
              nameQuestion={questions[currentQuestion - 1].name}
              questions={questions}
            />

            {currentQuestion === 1 && (
              <QuizBodyOne
                answersQuiz={answersQuiz}
                setAnswersQuiz={setAnswersQuiz}
              />
            )}
            {currentQuestion === 2 && (
              <QuizBodyTwo
                answersQuiz={answersQuiz}
                setAnswersQuiz={setAnswersQuiz}
              />
            )}
            {currentQuestion === 3 && (
              <QuizBodyTree
                answersQuiz={answersQuiz}
                setAnswersQuiz={setAnswersQuiz}
                widthScreen={widthScreen}
              />
            )}
            {currentQuestion === 4 && (
              <QuizBodyFour
                answersQuiz={answersQuiz}
                setAnswersQuiz={setAnswersQuiz}
              />
            )}
            {currentQuestion === 5 && (
              <QuizBodyFive
                answersQuiz={answersQuiz}
                setAnswersQuiz={setAnswersQuiz}
              />
            )}

            <QuizNav
              answersQuiz={answersQuiz}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              sendQuiz={sendQuiz}
              isLoading={isLoading}
            />
          </WrapperQuiz>
        )}
      </InnerQuiz>
    </GoogleAnalyticsWrapper>
  );
};
export default Quiz;
