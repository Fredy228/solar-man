import { CircleCheck, QuizBodyInner } from '../QuizBody.styled';
import { AnswerText } from '../QuizImage/QuizImage.styled';
import { Icon } from '../../../../reused/icon/Icon';
import {
  InnerAnswersTwo,
  ItemAnswersTwo,
  ListAnswersTwo,
} from './QuizText.styled';

export const QuizText = ({ answersQuiz, setAnswersQuiz, currentQuestion }) => {
  const choseAnswer = answerIdx => {
    setAnswersQuiz(prev => {
      const state = [...prev];
      state[currentQuestion - 1].currentIdx = answerIdx;
      state[currentQuestion - 1].currentValue =
        state[currentQuestion - 1].answers[answerIdx];
      return state;
    });
  };

  return (
    <QuizBodyInner>
      <ListAnswersTwo>
        {answersQuiz[1].answers.map((item, index) => {
          return (
            <ItemAnswersTwo
              key={index}
              onClick={() => choseAnswer(index)}
              activeAnswer={
                answersQuiz[currentQuestion - 1].currentIdx === index
              }
            >
              <CircleCheck
                activeAnswer={
                  answersQuiz[currentQuestion - 1].currentIdx === index
                }
              >
                <Icon name={'icon-check-list'} />
              </CircleCheck>
              <InnerAnswersTwo>
                <AnswerText>{item}</AnswerText>
              </InnerAnswersTwo>
            </ItemAnswersTwo>
          );
        })}
      </ListAnswersTwo>
    </QuizBodyInner>
  );
};
