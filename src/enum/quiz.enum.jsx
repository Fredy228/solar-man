import { QuizImage } from '../components/ui/quiz/QuizBody/QuizImage/QuizImage';
import { QuizText } from '../components/ui/quiz/QuizBody/QuizText/QuizText';
import { QuizTextWithAdd } from '../components/ui/quiz/QuizBody/QuizTextWithAdd/QuizTextWithAdd';
import { QuizContact } from '../components/ui/quiz/QuizBody/QuizContact/QuizContact';
import { SliderWithResult } from '../components/ui/quiz/QuizBody/Slider/SliderWithResult';
import { Slider } from '../components/ui/quiz/QuizBody/Slider/Slider';

export const QuestionTypeEnum = {
  TEXT: 'TEXT',
  TEXT_WITH_ADD: 'TEXT_WITH_ADD',
  IMAGE: 'IMAGE',
  SLIDER: 'SLIDER',
  SLIDER_WITH_RESULT: 'SLIDER_WITH_RESULT',
  CONTACT: 'CONTACT',
};

export const QuestionFCEnum = {
  [QuestionTypeEnum.IMAGE]: props => <QuizImage {...props} />,
  [QuestionTypeEnum.TEXT]: props => <QuizText {...props} />,
  [QuestionTypeEnum.TEXT_WITH_ADD]: props => <QuizTextWithAdd {...props} />,
  [QuestionTypeEnum.CONTACT]: props => <QuizContact {...props} />,
  [QuestionTypeEnum.SLIDER_WITH_RESULT]: props => (
    <SliderWithResult {...props} />
  ),
  [QuestionTypeEnum.SLIDER]: props => <Slider {...props} />,
};
