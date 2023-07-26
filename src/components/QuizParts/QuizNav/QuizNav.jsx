import { QuizNavButton, QuizNavInner } from './QuizNav.styled';
import { Icon } from '../../Icon/Icon';

export const QuizNav = ({
  answersQuiz,
  currentQuestion,
  setCurrentQuestion,
  sendQuiz,
  isLoading,
}) => {
  const isFillCurrent = answersQuiz[currentQuestion - 1].currentAnswer !== null;

  const handleButton = () => {
    window.scrollTo(0, 0);
    if (currentQuestion !== 5) {
      return setCurrentQuestion(prev => {
        if (prev === 5) return prev;
        return prev + 1;
      });
    }
    sendQuiz();
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
        {currentQuestion !== 5 ? 'Далі' : 'Надіслати'}

        <Icon
          name={currentQuestion !== 5 ? 'icon-arrow-right-long' : 'icon-email'}
        />
      </QuizNavButton>
    </QuizNavInner>
  );
};
