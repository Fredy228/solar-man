import {
  QuizStartImg,
  QuizStartImgWrapper,
  QuizStartInner,
  QuizStartIntroImg,
  QuizStartIntroText,
  QuizStartIntroTitle,
  QuizStartIntroWrapper,
  QuizStartTitleSpan,
  QuizStartWrapper,
} from './QuizStart.styled';
import { Container } from '../../../../pages/Common.styled';

import quiz_start_img from 'img/quiz/quiz-start.webp';
import quiz_diagram_img from 'img/quiz/quiz-diagrama.webp';

import { QuizNavButton } from '../QuizNav/QuizNav.styled';
import { Icon } from '../../../reused/icon/Icon';

export const QuizStart = ({ setIsReady, title }) => {
  return (
    <QuizStartInner>
      <Container>
        <QuizStartWrapper>
          <QuizStartImgWrapper>
            <QuizStartImg
              src={quiz_start_img}
              alt={'Фото панелі та каска'}
              load={'lazy'}
            />
          </QuizStartImgWrapper>
          <QuizStartIntroWrapper>
            <QuizStartIntroTitle>
              {title || (
                <>
                  Отримайте{' '}
                  <QuizStartTitleSpan>безкоштовний</QuizStartTitleSpan> проект і
                  кошторис <br /> вашої станції
                </>
              )}
            </QuizStartIntroTitle>
            <QuizStartIntroText>
              Для цього дайте відповідь <br /> лише на 5 питаннь
            </QuizStartIntroText>
            <QuizStartIntroImg
              src={quiz_diagram_img}
              alt={'Фото діагама'}
              load={'lazy'}
            />
            <QuizNavButton
              type={'button'}
              colorBgHover={'second'}
              marginLeft={'10px'}
              onClick={() => setIsReady(true)}
            >
              Почати розрахунок <Icon name={'icon-arrow-right-long'} />
            </QuizNavButton>
          </QuizStartIntroWrapper>
        </QuizStartWrapper>
      </Container>
    </QuizStartInner>
  );
};
