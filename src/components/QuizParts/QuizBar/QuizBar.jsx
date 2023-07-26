import {
  NumberQuestion,
  QuestionName,
  QuizBarInner,
  QuizCurrentBox,
  QuizStepsBox,
  SpanStep,
  TitleSpanStep,
  WrapperSpanStep,
} from './QuizBar.styled';

export const QuizBar = ({ currentQuestion, nameQuestion, questions }) => {
  return (
    <QuizBarInner>
      <QuizCurrentBox>
        <NumberQuestion>{currentQuestion}</NumberQuestion>
        <QuestionName>{nameQuestion}</QuestionName>
      </QuizCurrentBox>
      <QuizStepsBox>
        <TitleSpanStep>Питання</TitleSpanStep>
        <WrapperSpanStep>
          {questions.map(i => (
            <SpanStep key={i.id} current={currentQuestion}>
              {i.id}
            </SpanStep>
          ))}
        </WrapperSpanStep>
      </QuizStepsBox>
    </QuizBarInner>
  );
};
