import { CircleCheck, QuizBodyInner } from '../QuizBody.styled';
import {
  AnswerImg,
  AnswerText,
  ItemAnswerOne,
  ListAnswersOne,
  WrapperAnswerImg,
} from './QuizImage.styled';
import { Icon } from '../../../../reused/icon/Icon';

export const QuizImage = ({ answersQuiz, setAnswersQuiz, currentQuestion }) => {
  const currentTarget = answersQuiz[currentQuestion - 1];
  const images = currentTarget.images;
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
      <ListAnswersOne>
        {currentTarget.answers.map((item, index) => {
          return (
            <ItemAnswerOne
              key={index}
              onClick={() => choseAnswer(index)}
              activeAnswer={currentTarget.currentIdx === index}
            >
              <CircleCheck activeAnswer={currentTarget.currentIdx === index}>
                <Icon name={'icon-check-list'} />
              </CircleCheck>
              <WrapperAnswerImg>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet={images[index].pc[0]}
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={images[index].pc[1]}
                    type="image/jpg"
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet={images[index].mobile[0]}
                    type="image/webp"
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet={images[index].mobile[1]}
                    type="image/jpg"
                  />
                  <AnswerImg
                    src={images[index].pc[1]}
                    loading="lazy"
                    alt={item}
                    width="395"
                    height="183"
                  />
                </picture>
              </WrapperAnswerImg>
              <AnswerText>{item}</AnswerText>
            </ItemAnswerOne>
          );
        })}
      </ListAnswersOne>
    </QuizBodyInner>
  );
};
