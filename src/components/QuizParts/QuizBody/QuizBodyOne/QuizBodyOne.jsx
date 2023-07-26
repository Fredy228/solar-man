import { CircleCheck, QuizBodyInner } from '../QuizBody.styled';
import {
  AnswerImg,
  AnswerText,
  ItemAnswerOne,
  ListAnswersOne,
  WrapperAnswerImg,
} from './QuizBodyOne.styled';
import { Icon } from '../../../Icon/Icon';

import img1_webp_pc from '../../../../img/quiz/quiz-1_pc.webp';
import img1_webp_mobile from '../../../../img/quiz/quiz-1_mobile.webp';
import img1_jpg_pc from '../../../../img/quiz/quiz-1_pc.jpg';
import img1_jpg_mobile from '../../../../img/quiz/quiz-1_mobile.jpg';
import img2_webp_pc from '../../../../img/quiz/quiz-2_pc.webp';
import img2_webp_mobile from '../../../../img/quiz/quiz-2_mobile.webp';
import img2_jpg_pc from '../../../../img/quiz/quiz-2_pc.jpg';
import img2_jpg_mobile from '../../../../img/quiz/quiz-2_mobile.jpg';
import img3_webp_pc from '../../../../img/quiz/quiz-3_pc.webp';
import img3_webp_mobile from '../../../../img/quiz/quiz-3_mobile.webp';
import img3_jpg_pc from '../../../../img/quiz/quiz-3_pc.jpg';
import img3_jpg_mobile from '../../../../img/quiz/quiz-3_mobile.jpg';

const arrPhotos = [
  {
    id: 1,
    pc: [img1_webp_pc, img1_jpg_pc],
    mobile: [img1_webp_mobile, img1_jpg_mobile],
  },
  {
    id: 2,
    pc: [img2_webp_pc, img2_jpg_pc],
    mobile: [img2_webp_mobile, img2_jpg_mobile],
  },
  {
    id: 3,
    pc: [img3_webp_pc, img3_jpg_pc],
    mobile: [img3_webp_mobile, img3_jpg_mobile],
  },
];

export const QuizBodyOne = ({ answersQuiz, setAnswersQuiz }) => {
  const choseAnswer = currentAnswer => {
    setAnswersQuiz(prev => {
      const state = { ...prev };
      state[0].currentAnswer = currentAnswer;
      state[0].currentValue = state[0].answers[currentAnswer];
      return state;
    });
  };

  return (
    <QuizBodyInner>
      <ListAnswersOne>
        {answersQuiz[0].answers.map((item, index) => {
          return (
            <ItemAnswerOne
              key={index}
              onClick={() => choseAnswer(index)}
              activeAnswer={answersQuiz[0].currentAnswer === index}
            >
              <CircleCheck
                activeAnswer={answersQuiz[0].currentAnswer === index}
              >
                <Icon name={'icon-check-list'} />
              </CircleCheck>
              <WrapperAnswerImg>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet={arrPhotos[index].pc[0]}
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={arrPhotos[index].pc[1]}
                    type="image/jpg"
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet={arrPhotos[index].mobile[0]}
                    type="image/webp"
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet={arrPhotos[index].mobile[1]}
                    type="image/jpg"
                  />
                  <AnswerImg
                    src={arrPhotos[index].pc[1]}
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
