import { CircleCheck, QuizBodyInner } from '../QuizBody.styled';
import {
  InnerAnswersTwo,
  ItemAnswersTwo,
  ListAnswersTwo,
} from '../QuizText/QuizText.styled';
import { Icon } from '../../../../reused/icon/Icon';
import { AnswerText } from '../QuizImage/QuizImage.styled';
import { QuizCountryInput } from './QuizTextWithAdd.styled';

export const QuizTextWithAdd = ({
  setAnswersQuiz,
  answersQuiz,
  currentQuestion,
}) => {
  const currQuestion = answersQuiz[currentQuestion - 1];
  const currIdxAnswer = currQuestion.currentIdx;

  const handleInput = e => {
    const { value } = e.target;
    setAnswersQuiz(prev => {
      const state = [...prev];
      state[currentQuestion - 1].input = value;
      return state;
    });
  };

  const choseAnswer = currentAnswerIdx => {
    setAnswersQuiz(prev => {
      const state = [...prev];
      state[currentQuestion - 1].currentIdx = currentAnswerIdx;
      state[currentQuestion - 1].currentValue =
        state[currentQuestion - 1].answers[currentAnswerIdx];
      return state;
    });
  };

  return (
    <QuizBodyInner>
      <ListAnswersTwo>
        {currQuestion.answers.map((item, index) => {
          return (
            <ItemAnswersTwo
              key={index}
              onClick={() => choseAnswer(index)}
              activeAnswer={currIdxAnswer === index}
            >
              <CircleCheck activeAnswer={currIdxAnswer === index}>
                <Icon name={'icon-check-list'} />
              </CircleCheck>
              <InnerAnswersTwo>
                <AnswerText>{item}</AnswerText>
                {index === currQuestion.answers.length - 1 && (
                  <QuizCountryInput
                    type={'text'}
                    value={currQuestion.input}
                    onChange={handleInput}
                    placeholder={currQuestion.name}
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
