import { CircleCheck, QuizBodyInner } from '../QuizBody.styled';
import { AnswerText } from '../QuizBodyOne/QuizBodyOne.styled';
import { Icon } from '../../../Icon/Icon';
import {
  InnerAnswersTwo,
  ItemAnswersTwo,
  ListAnswersTwo,
} from './QuizBodyTwo.styled';

export const QuizBodyTwo = ({ answersQuiz, setAnswersQuiz }) => {
  const choseAnswer = currentAnswer => {
    setAnswersQuiz(prev => {
      const state = { ...prev };
      state[1].currentAnswer = currentAnswer;
      state[1].currentValue = state[1].answers[currentAnswer];
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
              activeAnswer={answersQuiz[1].currentAnswer === index}
            >
              <CircleCheck
                activeAnswer={answersQuiz[1].currentAnswer === index}
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
