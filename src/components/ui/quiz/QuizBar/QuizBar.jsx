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

export const QuizBar = ({ currentQuestion, questions }) => {
  return (
    <QuizBarInner>
      <QuizCurrentBox>
        <NumberQuestion>{currentQuestion}</NumberQuestion>
        <QuestionName>{questions[currentQuestion - 1].name}</QuestionName>
      </QuizCurrentBox>
      <QuizStepsBox>
        <TitleSpanStep>Питання</TitleSpanStep>
        <WrapperSpanStep>
          {questions.map((i, idx) => (
            <SpanStep key={i.id} current={currentQuestion}>
              {idx + 1}
            </SpanStep>
          ))}
        </WrapperSpanStep>
      </QuizStepsBox>
    </QuizBarInner>
  );
};
