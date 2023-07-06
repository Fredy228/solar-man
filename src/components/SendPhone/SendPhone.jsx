import { Inner, Text, Span, TextAdd } from './SendPhone.styled';

import { useBasket } from 'globalState/globalState';
import { ApplicationForm } from './ApplicationForm';

export const SendPhone = () => {
  const { currentGood } = useBasket();

  return (
    <Inner>
      <Text isBold={true}>Отримаєте безкоштовну консультацію!</Text>
      <Text>
        Заповніть дані або зателефонуйте нам по номеру{' '}
        <Span href="tel:+380680554488">0680554488</Span>
      </Text>
      <TextAdd>Найближчим часом з вами зв'яжеться менеджер.</TextAdd>
      <ApplicationForm currentGood={currentGood} />
      {currentGood && <TextAdd>Консультація стосовно: {currentGood}</TextAdd>}
    </Inner>
  );
};
