import { CircleCheck, QuizBodyInner } from '../QuizBody.styled';
import {
  InnerAnswersTwo,
  ItemAnswersTwo,
  ListAnswersTwo,
} from '../QuizBodyTwo/QuizBodyTwo.styled';
import { Icon } from '../../../Icon/Icon';
import { AnswerText } from '../QuizBodyOne/QuizBodyOne.styled';
import { QuizCountryInput } from './QuizBodyFour.styled';

export const QuizBodyFour = ({ setAnswersQuiz, answersQuiz }) => {
  const handleInput = e => {
    const { value } = e.target;
    setAnswersQuiz(prev => {
      const state = { ...prev };
      state[3].country = value;
      return state;
    });
  };

  const choseAnswer = currentAnswer => {
    setAnswersQuiz(prev => {
      const state = { ...prev };
      state[3].currentAnswer = currentAnswer;
      state[3].currentValue = state[3].answers[currentAnswer];
      return state;
    });
  };

  return (
    <QuizBodyInner>
      <ListAnswersTwo>
        {answersQuiz[3].answers.map((item, index) => {
          return (
            <ItemAnswersTwo
              key={index}
              onClick={() => choseAnswer(index)}
              activeAnswer={answersQuiz[3].currentAnswer === index}
            >
              <CircleCheck
                activeAnswer={answersQuiz[3].currentAnswer === index}
              >
                <Icon name={'icon-check-list'} />
              </CircleCheck>
              <InnerAnswersTwo>
                <AnswerText>{item}</AnswerText>
                {index === 3 && (
                  <QuizCountryInput
                    type={'text'}
                    value={answersQuiz[3].country}
                    onChange={handleInput}
                    placeholder={'Назва вашого міста'}
                  />
                )}
              </InnerAnswersTwo>
            </ItemAnswersTwo>
          );
        })}
      </ListAnswersTwo>
    </QuizBodyInner>
  );
};
