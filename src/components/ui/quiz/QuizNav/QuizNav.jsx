import { QuizNavButton, QuizNavInner } from './QuizNav.styled';
import { Icon } from '../../../reused/icon/Icon';
import { TelegramQuizEvents } from '../telegram-events';

export const QuizNav = ({
  answersQuiz,
  currentQuestion,
  setCurrentQuestion,
  sendQuiz,
  isLoading,
}) => {
  const isFillCurrent = answersQuiz[currentQuestion - 1].currentIdx !== null;

  const handleButton = () => {
    window.scrollTo(0, 0);
    if (currentQuestion !== answersQuiz.length) {
      return setCurrentQuestion(prev => {
        if (prev === answersQuiz.length) return prev;
        return prev + 1;
      });
    }
    sendQuiz();

    if (process.env.NODE_ENV === 'development') return;
    TelegramQuizEvents[`${currentQuestion}_step`]();
  };

  return (
    <QuizNavInner>
      {currentQuestion !== 1 && (
        <QuizNavButton
          type={'button'}
          colorBg={'transparent'}
          colorBorder={'g1'}
          colorSvg={'g1'}
          colorFont={'g1'}
          colorBgHover={'g1'}
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          marginRight={'10px'}
        >
          <Icon name={'icon-arrow-left-long'} /> Назад
        </QuizNavButton>
      )}
      <QuizNavButton
        type={'button'}
        colorBgHover={'second'}
        disabled={!isFillCurrent && !isLoading}
        onClick={handleButton}
        marginLeft={'10px'}
      >
        {currentQuestion !== answersQuiz.length ? 'Далі' : 'Надіслати'}

        <Icon
          name={
            currentQuestion !== answersQuiz.length
              ? 'icon-arrow-right-long'
              : 'icon-email'
          }
        />
      </QuizNavButton>
    </QuizNavInner>
  );
};
