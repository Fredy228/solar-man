import { QuestionTypeEnum } from '../../enum/quiz.enum';
import img1_webp_pc from '../../img/quiz/quiz-1_pc.webp';
import img1_jpg_pc from '../../img/quiz/quiz-1_pc.jpg';
import img1_webp_mobile from '../../img/quiz/quiz-1_mobile.webp';
import img1_jpg_mobile from '../../img/quiz/quiz-1_mobile.jpg';
import img2_webp_pc from '../../img/quiz/quiz-2_pc.webp';
import img2_jpg_pc from '../../img/quiz/quiz-2_pc.jpg';
import img2_webp_mobile from '../../img/quiz/quiz-2_mobile.webp';
import img2_jpg_mobile from '../../img/quiz/quiz-2_mobile.jpg';
import img3_webp_pc from '../../img/quiz/quiz-3_pc.webp';
import img3_jpg_pc from '../../img/quiz/quiz-3_pc.jpg';
import img3_webp_mobile from '../../img/quiz/quiz-3_mobile.webp';
import img3_jpg_mobile from '../../img/quiz/quiz-3_mobile.jpg';
import QuizBase from './QuizBase';

const questions = [
  {
    id: 1,
    name: 'Для чого встановлюється станція?',
    answers: [
      'Підприємство (офіс, ТРЦ, готель, ресторан)',
      'Власний будинок',
      'Заробіток на зеленому тарифі',
    ],
    currentIdx: null,
    currentValue: null,
    type: QuestionTypeEnum.IMAGE,
    images: [
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
    ],
  },
  {
    id: 2,
    name: 'Яку потребу вирішуємо?',
    answers: [
      'Повна незалежність від електромережі',
      'Компенсація частини споживання',
      'Резервне живлення',
      'Пасивний дохід',
    ],
    currentIdx: null,
    currentValue: null,
    type: QuestionTypeEnum.TEXT,
  },
  {
    id: 3,
    name: 'Яка потужність вас цікавить?',
    answers: [],
    currentIdx: [5],
    currentValue: '5 кВт',
    from: 5,
    before: 30,
    step: 1,
    points: [5, 10, 20, 30, 30],
    type: QuestionTypeEnum.SLIDER,
  },
  {
    id: 4,
    name: 'Вкажіть ваше місто',
    answers: ['Одеса', 'Миколаїв', 'Область', 'Інше'],
    currentIdx: null,
    currentValue: null,
    type: QuestionTypeEnum.TEXT_WITH_ADD,
    input: '',
  },
  {
    id: 5,
    name: 'Вкажіть Ім’я та номер телефону',
    currentIdx: 1,
    firstName: '',
    phone: '',
    type: QuestionTypeEnum.CONTACT,
  },
];

const QuizGeneral = () => {
  return <QuizBase questions={questions} />;
};
export default QuizGeneral;
