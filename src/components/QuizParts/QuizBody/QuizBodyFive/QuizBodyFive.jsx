import { QuizBodyInner } from '../QuizBody.styled';
import { WrapperContactsQuiz } from './QuizBodyFive.styled';
import { Input, PhoneInput } from '../../../SendPhone/SendPhone.styled';

export const QuizBodyFive = ({ setAnswersQuiz, answersQuiz }) => {
  const handleInputName = e => {
    const { value } = e.target;
    setAnswersQuiz(prev => {
      const state = { ...prev };
      state[4].firstName = value;
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
      const state = { ...prev };
      state[4].phone = value;
      return state;
    });
  };

  return (
    <QuizBodyInner>
      <WrapperContactsQuiz>
        <Input
          type="text"
          placeholder="Ваше ім’я"
          value={answersQuiz[4].firstName}
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
