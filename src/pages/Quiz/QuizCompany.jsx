import { QuestionTypeEnum } from '../../enum/quiz.enum';
import img1_webp_pc from '../../img/quiz/company/img1-1_pc_webp.webp';
import img1_jpg_pc from '../../img/quiz/company/img1-1_pc_jpg.jpg';
import img1_webp_mobile from '../../img/quiz/company/img1-1_mobile_webp.webp';
import img1_jpg_mobile from '../../img/quiz/company/img1-1_mobile_jpg.jpg';
import img2_webp_pc from '../../img/quiz/company/img1-2_pc_webp.webp';
import img2_jpg_pc from '../../img/quiz/company/img1-2_pc_jpg.jpg';
import img2_webp_mobile from '../../img/quiz/company/img-1-2_mobile_webp.webp';
import img2_jpg_mobile from '../../img/quiz/company/img-1-2_mobile_jpg.jpg';

import img3_webp_pc from '../../img/quiz/company/img3-1_pc_webp.webp';
import img3_jpg_pc from '../../img/quiz/company/img3-1_pc_jpg.jpg';
import img3_webp_mobile from '../../img/quiz/company/img3-1_mobile_webp.webp';
import img3_jpg_mobile from '../../img/quiz/company/img3-1_mobile_jpg.jpg';
import img4_webp_pc from '../../img/quiz/company/img3-2_pc_webp.webp';
import img4_jpg_pc from '../../img/quiz/company/img3-2_pc_jpg.jpg';
import img4_webp_mobile from '../../img/quiz/company/img3-2_mobile_webp.webp';
import img4_jpg_mobile from '../../img/quiz/company/img3-2_mobile_jpg.jpg';
import QuizBase from './QuizBase';
// import ReactPixel from 'react-facebook-pixel';

const questions = [
  {
    id: 1,
    name: 'Який тип станції потрібен?',
    answers: [
      'Мережева (Для економії витрат на електроенергію)',
      'З АКБ (Працює при відключені світла)',
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
    ],
  },
  {
    id: 2,
    name: 'Яка потужність вас цікавить?',
    answers: [],
    currentIdx: [100],
    currentValue: '100 кВт/год',
    from: 30,
    before: 500,
    step: 5,
    metrics: 'кВт/год',
    calc: value => {
      return [
        [
          'Річна економія',
          `${Intl.NumberFormat('ru-RU').format(value * 1100 * 7)} грн`,
        ],
      ];
    },
    type: QuestionTypeEnum.SLIDER_WITH_RESULT,
  },
  {
    id: 3,
    name: 'Де буде розташована станція?',
    answers: ['На даху', 'На землі'],
    currentIdx: null,
    currentValue: null,
    type: QuestionTypeEnum.IMAGE,
    images: [
      {
        id: 1,
        pc: [img3_webp_pc, img3_jpg_pc],
        mobile: [img3_webp_mobile, img3_jpg_mobile],
      },
      {
        id: 2,
        pc: [img4_webp_pc, img4_jpg_pc],
        mobile: [img4_webp_mobile, img4_jpg_mobile],
      },
    ],
  },
  {
    id: 4,
    name: 'Вкажіть ваше місто',
    answers: ['Одеса', 'Київ', 'Інше'],
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

const QuizCompany = () => {
  return (
    <QuizBase
      title={'Отримайте кошторис для підприємств'}
      questions={questions}
    />
  );
};
export default QuizCompany;
