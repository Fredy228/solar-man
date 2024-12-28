import { QuizBodyInner } from '../QuizBody.styled';
import { WrapperContactsQuiz } from './QuizContact.styled';
import {
  Input,
  PhoneInput,
} from '../../../../modals/send-phone/SendPhone.styled';

export const QuizContact = ({
  setAnswersQuiz,
  answersQuiz,
  currentQuestion,
}) => {
  const currQuestion = answersQuiz[currentQuestion - 1];

  const handleInputName = e => {
    const { value } = e.target;
    setAnswersQuiz(prev => {
      const state = [...prev];
      state[currentQuestion - 1].firstName = value;
      return state;
    });
  };

  // const handleInputEmail = e => {
  //   const { value } = e.target;
  //   setAnswersQuiz(prev => {
  //     const state = { ...prev };
  //     state[4].email = value;
  //     return state;
  //   });
  // };

  const handleInputPhone = value => {
    setAnswersQuiz(prev => {
      const state = [...prev];
      state[currentQuestion - 1].phone = value;
      return state;
    });
  };

  return (
    <QuizBodyInner>
      <WrapperContactsQuiz>
        <Input
          type="text"
          placeholder="Ваше ім’я"
          value={currQuestion.firstName}
          pattern="[a-zA-Zа-яА-ЯёЁґҐіІїЇєЄ'’\-]+( [a-zA-Zа-яА-ЯёЁґҐіІїЇєЄ'’\-]+)*"
          name="name"
          onChange={handleInputName}
        />

        <PhoneInput
          type="text"
          mask="+{38}(000)-000-00-00"
          definitions={{
            '#': /[0-9]/,
          }}
          placeholder="Ваш номер телефону"
          name="phone"
          id="phone"
          onAccept={handleInputPhone}
        />

        {/*<Input*/}
        {/*  type="email"*/}
        {/*  placeholder="Ваш email"*/}
        {/*  value={answersQuiz[4].email}*/}
        {/*  name="email"*/}
        {/*  onChange={handleInputEmail}*/}
        {/*/>*/}
      </WrapperContactsQuiz>
    </QuizBodyInner>
  );
};
